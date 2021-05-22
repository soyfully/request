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

from BaseApi.Huobi.base_huobi import HuobiWebsocketClient, BaseHuobi
from Util.pyinstaller_patch import debugger


HOUBI_WEBSOCKET_URL = "wss://api-cloud.huobi.co.kr/ws"


class MainPageHandler(RequestHandler):
    def get(self):
        self.render('huobi_coin_table.html')


class TradingViewPageHandler(RequestHandler):
    def get(self):
        self.render('huobi_trading_view.html')


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
        self.market_overview_thread = HuobiDataPushThread(self.market_overview_queue, self.stopped, self.loop)
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


class HuobiDataPushThread(threading.Thread):
    """
    Huobi Data Push Thread
    Receive data from HuobiClientRunner through self.huobi_queue
    """
    def __init__(self, huobi_queue, stopped, loop):
        super().__init__()
        self.base_huobi = None
        
        self.clients = list()
        self.coins_dict = dict()
        self.kline_dict = dict()
        self.currencies = dict()

        self.huobi_queue = huobi_queue
        self.client_lock = threading.Lock()

        self.stopped = stopped
        self.loop = loop

        self.get_all_currency()
    
    def get_all_currency(self):
        self.base_huobi = BaseHuobi(None, None)
        self.currencies = self.base_huobi.get_all_currency()

    def add_client(self, client):
        with self.client_lock:
            def callback():
                if self.coins_dict:
                    client.write_message(self.coins_dict)
                if self.kline_dict:
                    client.write_message(self.kline_dict)
            self.loop.add_callback(callback)

            self.clients.append(client)

    def remove_client(self, client):
        with self.client_lock:
            self.clients.remove(client)

    def run(self):
        while not self.stopped.is_set():
            data_type, huobi_coin_data = self.huobi_queue.get()
            
            if data_type == 'market_overview':
                market_overview = huobi_coin_data['data']
                push_data = self.sort_coins_by_currency(market_overview)

            # get bulk kline data for btckrw, ethkrw, htkrw, usdtkrw
            elif data_type == 'kline_bulk':
                currency = huobi_coin_data['rep'].split('.')[1]
                kline_currency = 'kline_{}'.format(currency)

                price_list = list()
                for prices in huobi_coin_data['data']:
                    close_price = prices['close']
                    price_list.append(close_price)

                self.kline_dict.setdefault(kline_currency, price_list)                
                push_data = self.kline_dict
            
            # update kline data for btckrw, ethkrw, htkrw, usdtkrw
            # pop first one, append new one at the end
            elif data_type == 'kline_update':
                currency = huobi_coin_data['ch'].split('.')[1]
                kline_currency = 'kline_{}'.format(currency)

                updated_price = huobi_coin_data['tick']['close']

                price_list = self.kline_dict.get(kline_currency, None)
                if price_list:
                    price_list.pop(0)
                    price_list.append(updated_price)

                push_data = self.kline_dict
            
            # push data to client
            with self.client_lock:
                for client in self.clients:
                    data = json.dumps(push_data)

                    def callback():
                        client.write_message(data)

                    # add_callback doesn't work without time.sleep()
                    self.loop.add_callback(callback)
                    time.sleep(0.00000001)
    
    def sort_coins_by_currency(self, coins):        
        # to sepreate currency and market type from combined keys ex)btcusdt, ethbtc
        currency_regex = re.compile(r'.+(?=usdt|eth|btc|ht|krw)')

        for coin in coins:
            currency_with_market_type = coin['symbol']

            currency = currency_regex.match(currency_with_market_type).group()
            market_type = currency_with_market_type.replace(currency, '')

            amount = coin['amount']
            close = coin['close']
            high =  coin['high']
            low =  coin['low']
            open =  coin['open']
            count =  coin['count']

            # get translated coin name
            try:
                currency_name = self.currencies[currency]['currency_name']
            except KeyError:
                debugger.debug('no currency name for {}'.format(currency))
            
            # get coin image url
            try:
                icon_img_url = self.currencies[currency]['icon_img']
            except KeyError:
                debugger.debug('no icon image for {}'.format(currency))

            vol = coin['vol']
            vol_million = coin['vol'] / 10 ** 6

            self.coins_dict.setdefault(currency, dict())

            coin_info_by_currency = dict(
                                    amount=amount,
                                    close=close,
                                    high=high,
                                    low=low,
                                    open=open,
                                    vol=vol,
                                    vol_million=vol_million,
                                    count=count,
                                    currency_name=currency_name,
                                    icon_img_url=icon_img_url
                                )
            
            # update values in self.coins_dict every time it gets data from huobi
            self.coins_dict[currency][market_type] = coin_info_by_currency
        return self.coins_dict
    

class HuobiClientRunner(object):
    """
        run while loop to get huobi data forever from HuobiWebsocketClient()
        sends huobi market data to HuobiDataPushThread() through self.huobi_queue
    """
    def __init__(self, huobi_queue):
        self.huobi_client = HuobiWebsocketClient()
        self.huobi_queue = huobi_queue

        # to run native coroutine in the server background
        IOLoop.current().spawn_callback(self.get_huobi_data_forever)

    async def get_huobi_data_forever(self):
        # connection trial for 10 times with 1 sec interval
        for _ in range(10):
            try:
                await self.huobi_client.ws_connect()
                break
            except Exception as e:
                debugger.exception('unexpected error : {}\ntry to reconnect to Huobi Websocket Server'.format(e))
                time.sleep(1)

        self.huobi_client.subscribe_market_overview()

        self.huobi_client.request_bulk_kline('btckrw')
        self.huobi_client.subscribe_kline('btckrw')

        self.huobi_client.request_bulk_kline('ethkrw')
        self.huobi_client.subscribe_kline('ethkrw')

        self.huobi_client.request_bulk_kline('htkrw')
        self.huobi_client.subscribe_kline('htkrw')
        
        self.huobi_client.request_bulk_kline('usdtkrw')
        self.huobi_client.subscribe_kline('usdtkrw')
        
        while True:
            msg = await self.huobi_client.get_huobi_data()
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

                # get market overview data
                elif msg.get('ch', '') == 'market.overview':
                    self.huobi_queue.put(('market_overview', msg))

                # get bulk kline data
                elif 'kline.1min' in msg.get('rep', ''):
                    self.huobi_queue.put(('kline_bulk', msg))
                
                # update kline 1min data
                elif 'kline.1min' in msg.get('ch', ''):
                    self.huobi_queue.put(('kline_update', msg))

        debugger.debug('trying to reconnect to Huobi Websocket Server')
        self.get_huobi_data_forever()


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
