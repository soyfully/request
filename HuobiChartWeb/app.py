import sys
import os

import tornado.httpserver
import tornado.ioloop
import tornado.web
import sys
import asyncio
import settings
import queue

from handlers.websocket_handler import WSHandler, ClientManagerThread, MainPageHandler


if sys.platform == 'win32':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    # The default has changed from selector to pro-actor in Python 3.8.
    # Thus, this line should be added to detour probable errors


if __name__ == "__main__":
    settings = {"template_path": settings.TEMPLATE_PATH,
                "static_path": settings.STATIC_PATH
                }


    client_queue = queue.Queue()
    market_overview_queue = queue.Queue()

    application = tornado.web.Application([
        (r"/ws", WSHandler, dict(client_queue=client_queue)),
        (r'/main', MainPageHandler),
    ], **settings)

    http_server = tornado.httpserver.HTTPServer(application)

    socket_address = 8888
    http_server.listen(socket_address)

    loop = tornado.ioloop.IOLoop.current()

    client_manager_thread = ClientManagerThread(client_queue, market_overview_queue, loop)
    client_manager_thread.start()

    loop.start()

    client_manager_thread.stop()
