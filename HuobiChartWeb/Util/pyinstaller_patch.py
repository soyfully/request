import os
import sys
import logging
import time
import requests
import hashlib
import threading
import datetime
from logging.handlers import RotatingFileHandler

if sys.platform == 'win32':
    import win_unicode_console
    win_unicode_console.enable()

try:
    sys._MEIPASS = sys._MEIPASS
except:
    sys._MEIPASS = ''

driver_path = os.path.join(sys._MEIPASS, 'chromedriver.exe')
phantom_path = os.path.join(sys._MEIPASS, 'phantomjs.exe')

evt = threading.Event()
duplicate_access_evt = evt
evt.set()

debugger = logging.getLogger('Debugger')
debugger.setLevel(logging.DEBUG)
formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(lineno)d - %(message)s")

try:
    now = str(datetime.datetime.now()).replace(':','')
    if not os.path.isdir('./logs'):
        os.mkdir('./logs')
    os.mkdir('./logs/log-{}'.format(now))
    f_hdlr = RotatingFileHandler('./logs/log-{}/Debugger.log'.format(now), encoding='UTF-8', maxBytes=10 * 1024 * 1024, backupCount=50)
except:
    f_hdlr = RotatingFileHandler('Debugger.log', encoding='UTF-8', maxBytes=10 * 1024 * 1024, backupCount=50)
f_hdlr.setFormatter(formatter)
f_hdlr.setLevel(logging.DEBUG)

debugger.addHandler(f_hdlr)

formatter = logging.Formatter("[%(asctime)s] %(message)s")
s_hdlr = logging.StreamHandler()
s_hdlr.setFormatter(formatter)
if 'pydevd' in sys.modules:
    s_hdlr.setLevel(logging.DEBUG)
else:
    s_hdlr.setLevel(logging.INFO)

debugger.addHandler(s_hdlr)

def unhandled_exception(exctype, value, tb):
    debugger.exception()

sys.excepthook = unhandled_exception

import multiprocessing

# Module multiprocessing is organized differently in Python 3.4+
try:
    # Python 3.4+
    if sys.platform.startswith('win'):
        import multiprocessing.popen_spawn_win32 as forking
    else:
        import multiprocessing.popen_fork as forking
except ImportError:
    import multiprocessing.forking as forking

if sys.platform.startswith('win'):
    # First define a modified version of Popen.
    class _Popen(forking.Popen):
        def __init__(self, *args, **kw):
            if hasattr(sys, 'frozen'):
                # We have to set original _MEIPASS2 value from sys._MEIPASS
                # to get --onefile mode working.
                os.putenv('_MEIPASS2', sys._MEIPASS)
            try:
                super(_Popen, self).__init__(*args, **kw)
            finally:
                if hasattr(sys, 'frozen'):
                    # On some platforms (e.g. AIX) 'os.unsetenv()' is not
                    # available. In those cases we cannot delete the variable
                    # but only set it to the empty string. The bootloader
                    # can handle this case.
                    if hasattr(os, 'unsetenv'):
                        os.unsetenv('_MEIPASS2')
                    else:
                        os.putenv('_MEIPASS2', '')


    # Second override 'Popen' class with our modified version.
    forking.Popen = _Popen

import subprocess


def subprocess_args(include_stdout=True):
    # The following is true only on Windows.
    if hasattr(subprocess, 'STARTUPINFO'):
        # On Windows, subprocess calls will pop up a command window by default
        # when run from Pyinstaller with the ``--noconsole`` option. Avoid this
        # distraction.
        si = subprocess.STARTUPINFO()
        si.dwFlags |= subprocess.STARTF_USESHOWWINDOW
        # Windows doesn't search the path by default. Pass it an environment so
        # it will.
        env = os.environ
    else:
        si = None
        env = None

    # ``subprocess.check_output`` doesn't allow specifying ``stdout``::
    #
    #   Traceback (most recent call last):
    #     File "test_subprocess.py", line 58, in <module>
    #       **subprocess_args(stdout=None))
    #     File "C:\Python27\lib\subprocess.py", line 567, in check_output
    #       raise ValueError('stdout argument not allowed, it will be overridden.')
    #   ValueError: stdout argument not allowed, it will be overridden.
    #
    # So, add it only if it's needed.
    if include_stdout:
        ret = {'stdout': subprocess.PIPE}
    else:
        ret = {}

    # On Windows, running this from the binary produced by Pyinstaller
    # with the ``--noconsole`` option requires redirecting everything
    # (stdin, stdout, stderr) to avoid an OSError exception
    # "[Error 6] the handle is invalid."
    ret.update({'stdin': subprocess.PIPE,
                'stderr': subprocess.PIPE,
                'startupinfo': si,
                'env': env })
    return ret


def update_ip(data, first_login=False):
    url = 'http://saiblockchain.com:8878/update_ip'
    try:
        r = requests.post(url, json={'id': data['id'],
                                     'first_login': first_login})
        data = r.json()
    except:
        print("서버가 닫혀 있습니다.")
        return False

    return True


def login(_id, _pw, pid):
    url = 'http://saiblockchain.com:8878/login'
    try:
        r = requests.post(url, json={'username': _id,
                                     'password': hashlib.sha256(_pw.encode()).hexdigest(),
                                     'program': hashlib.sha256(pid.encode()).hexdigest()})
        data = r.json()
    except:
        print("서버가 닫혀 있습니다.")
        return False

    if data['valid_id'] is False:
        print("아이디가 없거나, 패스워드가 틀렸습니다.")
        return False
    elif data['expired']:
        print("기간이 만료된 ID입니다.\n관리자에게 문의하세요.")
        return False
    elif data['duplicated_connection']:
        res = input('다른 네트워크에서 사용중인 ID 입니다.\n다른 네트워크의 연결을 끊고 로그인 하시겠습니까?(Y/N)').lower()

        if res == 'y':
            if update_ip(data, first_login=True) is False:
                return False
        elif res == 'n':
            return False
    else:
        if update_ip(data) is False:
            return False

    if data['notice']:
        print("{}".format(data['notice']))

    try:
        with open(os.path.join(sys._MEIPASS, '.sai_version')) as version_file:
            version = version_file.read(40)
    except:
        version = 'unknown'
    debugger.info("로그인 성공 - {} - {}".format(data['my_ip'], version))
    return data['id']


def check_status(id_, evt):
    while True:
        try:
            data = requests.post('http://saiblockchain.com:8878/check_stat', json={'id': id_}).json()

            if data['expired']:
                print("기간이 만료된 ID입니다.\n관리자에게 문의하세요.")
                evt.clear()
                os.system('PAUSE')
                sys.exit(-1)
            elif data['duplicated_connection']:
                print('같은 ID로 다른 네트워크에서 로그인하였습니다. 종료합니다.')
                evt.clear()
                os.system('PAUSE')
                sys.exit(-1)

            time.sleep(60)
        except:
            # debugger.exception('server error')
            # print("서버가 닫혀 있습니다.\n프로그램 동작과는 무관하지만 관리자에게 문의해 주세요.")
            time.sleep(600)


def close_program(id_):
    requests.post('http://saiblockchain.com:8878/close_prog', json={'id': id_}).json()
    debugger.debug("Close")


def user_check(cid, cpass, pid):
    if 'pydevd' in sys.modules:
        cid = 'test'
        cpass = 'test1234'
        pid = 'SECompanyAdmin'
    id_ = login(cid, cpass, pid)
    if id_ is False:
        os.system("PAUSE")
        sys.exit(-1)
    else:
        debugger.info('로그인 성공')
    t = threading.Thread(target=check_status, args=(id_, evt,))
    t.daemon = True
    t.start()

    return id_

