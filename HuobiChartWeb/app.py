import tornado.httpserver
import tornado.ioloop
import tornado.web
import asyncio
import queue

import HuobiChartWeb.settings
from HuobiChartWeb.handlers.websocket_handler import (
    WSHandler, ClientManagerThread, MainPageHandler, TradingViewPageHandler
)

from Util.pyinstaller_patch import *


if sys.platform == 'win32':
    try:
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
        # The default has changed from selector to pro-actor in Python 3.8.
        # Thus, this line should be added to detour probable errors
    except Exception:
        # < Python 3.8
        pass


def run_server():
    settings = {
        "template_path": HuobiChartWeb.settings.TEMPLATE_PATH,
        "static_path": HuobiChartWeb.settings.STATIC_PATH
    }

    client_queue = queue.Queue()
    market_overview_queue = queue.Queue()

    application = tornado.web.Application([
        (r"/ws", WSHandler, dict(client_queue=client_queue)),
        (r'/main', MainPageHandler),
        (r'/main/exchange/?(?P<currency_with_market>[A-Za-z0-9-]+)?', TradingViewPageHandler)
    ], **settings)

    http_server = tornado.httpserver.HTTPServer(application)

    socket_address = 8888
    http_server.listen(socket_address)

    loop = tornado.ioloop.IOLoop.current()

    client_manager_thread = ClientManagerThread(client_queue, market_overview_queue, loop)
    client_manager_thread.start()

    loop.start()

    client_manager_thread.stop()


if __name__ == "__main__":
    id_ = user_check("jhrwkw", 'jhrwkw123!', 'HuobiWebChart')
    try:
        run_server()
    except Exception:
        debugger.exception("FATAL")
        debugger.info("개발자에게 logs폴더를 압축해서 보내주세요")
    finally:
        close_program(id_)
        os.system("PAUSE")

    debugger.debug("DONE")

