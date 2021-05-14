from Util.pyinstaller_patch import debugger
from BaseApi.Util.utils import ResultObject

import hmac
import json
import base64
import hashlib
import requests
import time
import copy
import gzip

from urllib.parse import urlencode
from datetime import datetime

from tornado import gen
from tornado.websocket import websocket_connect
from io import BytesIO


class Urls(object):
    GET_ACCOUNT = '/v1/account/accounts'
    
    TRADE = '/v1/order/orders/place'
    CANCEL_ORDER = '/v1/order/orders/{order_id}/submitcancel'
    WEBSOCKET = 'wss://api-cloud.huobi.co.kr/ws'


class SubscribeTopics(object):
    MARKET_OVERVIEW = {'sub': 'market.overview'}


class BaseHuobi(object):
    def __init__(self, key, secret):
        self._key = key
        self._secret = secret
        self._base_url = 'https://api.huobi.pro'
        self.signature_version = 2

        self.get_headers = {
            "Content-type": "application/x-www-form-urlencoded",
            'User-Agent': ('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) '
                             'Chrome/39.0.2171.71 Safari/537.36')
        }

        self.post_headers = {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        }

        self.account_id = None

    def get_account_id(self):
        for _ in range(3):
            result_object = self.api_request('GET', Urls.GET_ACCOUNT)

            if result_object.success:
                self.account_id = result_object.data[0]['id']
                break
            debugger.debug(result_object.message)
        else:
            raise

    def encrypt(self, method, path, params, sign_data):
        copied_params = copy.deepcopy(params)
        if method == 'GET':
            copied_params.update(sign_data)
            encode_qry = urlencode(sorted(copied_params.items()))

        else:
            encode_qry = urlencode(sorted(sign_data.items()))

        payload = [method, 'api.huobi.pro', path, encode_qry]
        payload = '\n'.join(payload)

        sign = hmac.new(self._secret.encode('utf-8'), payload.encode('utf-8'), hashlib.sha256).digest()

        return base64.b64encode(sign).decode()

    def _base_result(self, result):
        status = result.get('status', None)
        if status and status in 'error':
            res_object = ResultObject(
                success=False,
                data=str(),
                message=result.get('err-msg', str()),
                wait_time=1
            )
        else:
            res_object = ResultObject(
                success=True,
                data=result['data'],
            )
    
        return res_object

    def api_request(self, method, path, params=None):
        if params is None:
            params = {}

        sign_data = {
                    'AccessKeyId': self._key,
                    'SignatureMethod': 'HmacSHA256',
                    'SignatureVersion': self.signature_version,
                    'Timestamp': datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S')
                     }

        sign = self.encrypt(method, path, params, sign_data)
        path = self._base_url + path

        sign_data['Signature'] = sign
        path += '?' + urlencode(sign_data)
            
        if method == 'GET':
            postdata = urlencode(params)
            rq = requests.request(method, path, params=postdata, headers=self.get_headers)

        else:
            postdata = json.dumps(params)
            rq = requests.request(method, path, data=postdata, headers=self.post_headers)

        result = rq.json()
        return self._base_result(result)

    def http_request(self, method, path, params=None):
        if params is None:
            params = dict()
        
        path = self._base_url + path
        
        if method == 'GET':
            postdata = urlencode(params)
            rq = requests.request(method, path, params=postdata, headers=self.get_headers)

        else:
            postdata = json.dumps(params)
            rq = requests.request(method, path, data=postdata, headers=self.post_headers)
        
        result = rq.json()
        return self._base_result(result)

    def buy(self, amount, coin, price=None, is_limit=True):
        params = dict()
        if is_limit is True:
            params.update(dict(price=price, type='buy-limit'))
        else:
            params.update(dict(type='buy-market'))

        params.update({'account-id': str(self.account_id),
                       'symbol': coin,
                       'amount': '{}'.format(amount).strip()})
        debugger.debug("params = {}.".format(params))

        return self.api_request('POST', Urls.TRADE, params)

    def sell(self, price, amount, coin, is_limit=True):
        
        params = dict()
        if is_limit is True:
            params.update(dict(price=price, type='sell-limit'))
        else:
            params.update(dict(type='sell-market'))

        params = {'account-id': str(self.account_id),
                  'symbol': coin,
                  'amount': '{}'.format(amount).strip()}
        debugger.debug("params = {}.".format(params))

        return self.api_request('POST', Urls.TRADE, params)
    
    def cancel_order(self, order_object):
        params = dict()
        order_id = order_object.uuid
        return self.api_request('POST', Urls.CANCEL_ORDER.format(order_id=order_id), params)


class HuobiMarketOverviewClient(object):
    def __init__(self):
        self.url = Urls.WEBSOCKET
        self.ws = None

    async def ws_connect(self):
        self.ws = await websocket_connect(self.url)
        debugger.debug('connected to Huobi Websocket Server')
        return self.ws

    def subscribe_market_overview(self):
        market_overview_topic = json.dumps(SubscribeTopics.MARKET_OVERVIEW)
        self.ws.write_message(market_overview_topic)
        debugger.debug('subscribed market overview topic')

    def get_market_overview(self):
        return self.ws.read_message()
    
    def ws_close(self):
        self.ws.close()
        debugger.debug('Huobi Websocket connection closed')

    def ws_send(self, message):
        self.ws.write_message(message)
