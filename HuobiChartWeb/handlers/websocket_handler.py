import sys
import os

import gzip
import json
import time
import threading
import re

from io import BytesIO
from tornado.web import RequestHandler
from tornado.ioloop import IOLoop
from tornado.websocket import WebSocketHandler

# to import BaseApi in Linux
# not sure how to import it properly
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))

from BaseApi.Huobi.base_huobi import HuobiMarketOverviewClient
from Util.pyinstaller_patch import debugger


HOUBI_WEBSOCKET_URL = "wss://api-cloud.huobi.co.kr/ws"


class MainPageHandler(RequestHandler):
    def get(self):
        self.render('test.html')


class ClientManagerThread(threading.Thread):
    def __init__(self, client_queue, market_overview_queue, loop):
        super().__init__()
        self.client_queue = client_queue
        self.market_overview_queue = market_overview_queue
        self.stopped = threading.Event()
        self.market_overview_thread = None
        self.huobi_client = None
        self.loop = loop

        self.run_market_overview_push_thread()
        self.run_huobi_websocket_client()

    def stop(self):
        self.stopped.set()

    def run_market_overview_push_thread(self):
        self.market_overview_thread = MarketOverviewPushThread(self.market_overview_queue, self.stopped, self.loop)
        self.market_overview_thread.start()
        debugger.debug('started : {}'.format(self.market_overview_thread.name))

    def run_huobi_websocket_client(self):
        self.huobi_client = HuobiClientRunner(self.market_overview_queue)
        debugger.debug('started : Huobi Websocket Client')

    def run(self):
        while not self.stopped.is_set():
            user_conn_info = self.client_queue.get()

            if user_conn_info.ws_connection:
                self.market_overview_thread.add_client(user_conn_info.client)
            else:
                self.market_overview_thread.remove_client(user_conn_info.client)


class MarketOverviewPushThread(threading.Thread):
    def __init__(self, market_overview_queue, stopped, loop):
        super().__init__()
        self.clients = list()
        self.market_overview = None
        self.coins_dict = dict()

        self.market_overview_queue = market_overview_queue
        self.client_lock = threading.Lock()
        self.stopped = stopped
        self.loop = loop

    def add_client(self, client):
        with self.client_lock:
            def callback():
                if self.market_overview:
                    client.write_message(self.market_overview)
            self.loop.add_callback(callback)

            self.clients.append(client)

    def remove_client(self, client):
        with self.client_lock:
            self.clients.remove(client)

    def run(self):
        while not self.stopped.is_set():
            market_overview = self.market_overview_queue.get()

            self.coins_dict = self.sort_coins_by_symbol(market_overview)

            if self.coins_dict:
                with self.client_lock:
                    for client in self.clients:
                        data = json.dumps(self.coins_dict)

                        def callback():
                            client.write_message(data)

                        # add_callback doesn't work without time.sleep()
                        self.loop.add_callback(callback)
                        time.sleep(0.00000001)
    
    def sort_coins_by_symbol(self, coins):
        # to sepreate currency and symbol from combined keys ex)btcusdt, ethbtc
        symbol_regex = re.compile(r'.+(?=usdt|eth|btc|ht|krw)')

        for coin in coins:
            symbol_with_currency = coin['symbol']

            symbol = symbol_regex.match(symbol_with_currency).group()
            currency = symbol_with_currency.replace(symbol, '')

            if currency == 'krw' or currency == 'usdt':
                formatter = '{:.2f}'
            else:
                formatter = '{:.8f}'

            amount = formatter.format(coin['amount'])
            close = formatter.format(coin['close'])
            high = formatter.format(coin['high'])
            low = formatter.format(coin['low'])
            open = formatter.format(coin['open'])
            count = formatter.format(coin['count'])
            vol = '{:.2f}'.format(coin['vol'])
            vol_million = '{:.2f}'.format(coin['vol'] / 10 ** 6)

            self.coins_dict.setdefault(symbol, dict())

            coin_info_by_currency = dict(
                                    amount=amount,
                                    close=close,
                                    high=high,
                                    low=low,
                                    open=open,
                                    vol=vol,
                                    vol_million=vol_million,
                                    count=count
                                )
            
            self.coins_dict[symbol][currency] = coin_info_by_currency
        return self.coins_dict
            

class HuobiClientRunner(object):
    """
        run while loop to get market overview forever
        sends market overview data from websocket to market_overview_queue
    """
    def __init__(self, market_overview_queue):
        self.huobi_client = HuobiMarketOverviewClient()
        self.market_overview_queue = market_overview_queue

        # to run native coroutine in the server background
        IOLoop.current().spawn_callback(self.get_market_overview_forever)

    async def get_market_overview_forever(self):
        for _ in range(10):
            try:
                await self.huobi_client.ws_connect()
                break
            except Exception as e:
                debugger.exception('unexpected error : {}\ntry to reconnect to Huobi Websocket Server'.format(e))

        self.huobi_client.subscribe_market_overview()

        while True:
            msg = await self.huobi_client.get_market_overview()
            if msg is None:
                self.huobi_client.ws_close()
                break

            with gzip.open(BytesIO(msg), 'rb') as f:
                raw_msg = f.read().decode('utf-8')
                msg = json.loads(raw_msg)
                
                # pong should be sent back to the Huobi Server with the same value in ping
                # otherwise the connection to the server closes
                if 'ping' in msg:
                    ping = msg['ping']
                    pong = json.dumps(dict(pong=ping))

                    self.huobi_client.ws_send(pong)
                # subscribe success messeage is not needed
                elif 'subbed' in msg:
                    pass
                else:
                    market_overview = msg['data']
                    self.market_overview_queue.put(market_overview)

        debugger.debug('trying to reconnect to Huobi Websocket Server')
        self.get_market_overview_forever()


class WSHandler(WebSocketHandler):
    """
    if a client connects to tornado websocket server,
    the user information is delivered to ClientManagerThread through client_queue 
    """
    def __init__(self, application, request, client_queue):
        super(WSHandler, self).__init__(application, request)
        self.client_queue = client_queue

    def add_connection(self):
        user_conn_info = UserConnectionInfo(True, self)
        self.client_queue.put(user_conn_info)

    def remove_connection(self):
        user_conn_info = UserConnectionInfo(False, self)
        self.client_queue.put(user_conn_info)

    def open(self):
        debugger.debug("Tornado Websocket Connection Opened")
        self.add_connection()

    def on_close(self):
        debugger.debug("Tornado Websocket Connection Closed")
        self.remove_connection()

    def check_origin(self, origin):
        return True


class UserConnectionInfo(object):
    """
    user ws connection information
    self.ws_connection : if True, it means the WSHandler has invoked add_connection()
                         if False, it means the WSHandler has invoked remove_connection()
    self.client : a current client connected to the websocket server
    """
    def __init__(self, ws_connection, client):
        self.ws_connection = ws_connection
        self.client = client
