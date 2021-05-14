from Util.pyinstaller_patch import debugger
from BaseApi.Util.utils import ResultObject

import time
import base64
import hmac
import json
import hashlib
import requests


class Urls(object):
    LIMIT_BUY = '/order/limit_buy'
    LIMIT_SELL = '/order/limit_sell'
    CANCEL_ORDER = '/order/cancel'
    

MARKET_BUY_FLOAT = 1.05
MARKET_SELL_FLOAT = 0.95


class BaseCoinone(object):
    def __init__(self, key, secret):
        self._key = key  # access_token
        self._secret = secret
        self._base_url = 'https://api.coinone.co.kr/v2'
    
    def get_encoded_payload(self, payload):
        payload['nonce'] = int(time.time() * 1000)
        encoded_json = base64.b64encode(bytes(json.dumps(payload), 'utf-8'))
        return encoded_json

    def get_signature(self, payload):
        signature = hmac.new(self._secret.encode('utf-8'), payload, hashlib.sha512).hexdigest()
        return signature

    def _private_api(self, method, path, extra=None):
        debugger.debug('_private_api, [{}], [{}], [{}]'.format(method, path, extra))
        if extra is None:
            extra = dict()
    
        extra.update({'access_token': self._key,
                      'nonce': int(time.time() * 1000)})
    
        payload = self.get_encoded_payload(extra)
        signature = self.get_signature(payload)
    
        headers = {
            'Content-type': 'application/json',
            'X-COINONE-PAYLOAD': payload,
            'X-COINONE-SIGNATURE': signature,
        }
    
        url = self._base_url + path
    
        rq = requests.post(url, method, payload, headers=headers)
        
        if rq.status_code != 200:
            debugger.debug('request fail, [{}]'.format(rq.text))
            return dict()
        
        result = rq.json()
        
        return result
    
    def _base_result(self, result):
        if result.get('result', None) == 'success':
            res_object = ResultObject(
                success=True,
                data=result['orderId'],
            )
        else:
            res_object = ResultObject(
                success=False,
                data=str(),
                message=result.get('errorMsg', str()),
                wait_time=3
            )
        
        return res_object
    
    def buy(self, price, qty, currency, is_limit=True):
        if not isinstance(price, float):
            price = float(price)
    
        if is_limit is False:
            price = price * MARKET_BUY_FLOAT
    
        params = dict(
            price=price,
            qty=qty,
            currency=currency
        )
        
        result = self._private_api('POST', Urls.LIMIT_BUY, params)
        return self._base_result(result)

    def sell(self, price, qty, currency, is_limit=True):
        if not isinstance(price, float):
            price = float(price)
        
        if is_limit is False:
            price = price * MARKET_SELL_FLOAT
            
        params = dict(
            price=price,
            qty=qty,
            currency=currency
        )
        result = self._private_api('POST', Urls.LIMIT_SELL, params)
        return self._base_result(result)

    def cancel_order(self, id_object):
        params = dict(
            order_id=id_object.uuid,
            price=id_object.price,
            qty=id_object.qty,
            currency=id_object.currency,
            is_ask=id_object.is_ask
        )
    
        result = self._private_api('POST', Urls.CANCEL_ORDER, params)
    
        if result.get('result', None) == 'success':
            res_object = ResultObject(
                success=True,
                data=str(),
            )
        else:
            res_object = ResultObject(
                success=False,
                data=str(),
                message=result.get('errorMsg', str()),
                wait_time=3
            )
        return res_object
