class OrderIdObject(object):
    def __init__(self, price, qty, currency, uuid, is_ask):
        self.price = price
        self.qty = qty
        self.currency = currency
        self.uuid = uuid
        self.is_ask = is_ask
        

class ResultObject(object):
    def __init__(self, success, data, message=str(), wait_time=int()):
        self.success = success
        self.data = data
        self.message = message
        self.wait_time = wait_time


