#   Author: Nam
#   Ver: 1.0.9

import os

import logging
if os.name == "nt":
    from PIL import ImageGrab
else:
    import pyscreenshot as ImageGrab
import sys
import os
from pandas import DataFrame, read_excel, read_csv, ExcelWriter
import time

import requests

import smtplib
import datetime

from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

from selenium import webdriver

from selenium.webdriver.support.ui import WebDriverWait

from selenium.common.exceptions import TimeoutException, StaleElementReferenceException, WebDriverException

from Util.pyinstaller_patch import driver_path, debugger


class LoginFailed(Exception):
    pass


class NoSearchResult(Exception):
    pass


class NetworkError(Exception):
    pass


def send_mail(username, password, smtp_server='smtp.gmail.com', port=587, subject="", content="", files=[], to=None):
    """
    로그 자동 수집으로 더 빠르고 편리하게 수정할 수 있게 하기 위해 만듬
    단, 클라이언트한테 자동 수집 동의를 얻어낸 후 사용해야 함.

    :param username: 메일서버 아이디 (Google 아이디 사용권장)
    :param password: 메일서버 패스워드 (Google 패스워드 사용권장)

    :param smtp_server: 메일서버주소(기본은 구글 메일서버 'smtp.gmail.com')
    :param port: 메일서버 포트번호(기본은 구글 메일서버 디폴트 포트 587)

    :param subject: 메일 제목
    :param content: 메일 내용(텍스트)
    :param text_file: 텍스트가 파일로 저장된경우 사용
    :param png_files: 첨부용 이미지(png) 파일 리스트
    :param to: 받는 사람의 이메일 주소. None 일 경우 자기 자신(username)에게 전송
    :return: None
    """
    s = smtplib.SMTP(smtp_server, port)
    s.starttls()
    s.login(username, password)

    msg = MIMEMultipart()

    msg.attach(MIMEText(content))

    if files:
        for f in files:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(open(f, 'rb').read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', 'attachment; filename="{}"'.format(f))
            msg.attach(part)

    msg['Subject'] = subject
    msg['From'] = username
    if to:
        msg['To'] = to
    else:
        msg['To'] = username

    s.send_message(msg)
    s.quit()


def check_date(year, month, day, limit=7):
    """
    먹튀 방지용 원격 시간 체크
    원격 시계를 가져와서 데모버전 제한 시간과 비교, 제한 시간이 지난 경우에 프로그램을 종료하기 위해 만듬

    :param year: 데모버전 시작 년도
    :param month: 데모버전 시작 월
    :param day: 데모버전 시작 일

    :param limit: 데모버전 제한 기간 (일 기준)

    :return: True(사용가능), False(만료됨)
    """
    url = 'http://api.timezonedb.com/v2/get-time-zone?key=8HPR9HIM68XT&format=json&by=zone&zone=Asia/Seoul'
    r = requests.get(url)
    t = r.json()

    today = datetime.datetime.fromtimestamp(t['timestamp'] - t['gmtOffset']).date()
    dt = datetime.date(year, month, day)

    if today > dt + datetime.timedelta(days=limit):
        return False
    else:
        return True


class Logger:
    def __init__(self, name='Logger', mode=logging.DEBUG, fp='Log.log'):
        self.logger = logging.getLogger(name)
        self.logger.setLevel(mode)

        f_hdlr = logging.FileHandler(fp)
        f_hdlr.setLevel(logging.DEBUG)
        s_hdlr = logging.StreamHandler()
        s_hdlr.setLevel(logging.INFO)

        self.logger.addHandler(f_hdlr)
        self.logger.addHandler(s_hdlr)

    def exception(self, msg="", catch=True, src=None):
        self.logger.exception("[{0}] {1}".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), msg))
        if catch:
            img = ImageGrab.grab()
            img.save('Exception.png')
        if src:
            with open('ExceptionPageSource.txt', 'w', encoding='UTF-8') as s:
                s.write(src)

    def debug(self, msg=""):
        self.logger.debug("[{0}] {1}".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), msg))

    def info(self, msg=""):
        self.logger.info("[{0}] {1}".format(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()), msg))

    def __call__(self, msg, *args, **kwargs):
        self.debug(msg)


class Driver:
    if hasattr(sys, '_MEIPASS'):
        chrome_path = os.path.join(sys._MEIPASS, 'chromedriver.exe')
        phantom_path = os.path.join(sys._MEIPASS, 'phantomjs.exe')
    else:
        chrome_path = os.path.join(os.path.basename('.'), 'chromedriver.exe')
        phantom_path = os.path.join(os.path.basename('.'), 'phantomjs.exe')


class PandasModule:
    def append(self, data_frame):
        temp = DataFrame(data_frame)
        if self.df.empty:
            self.df = temp
        else:
            self.df = self.df.append(temp)

        return self.df

    def rows(self):
        return self.df.iterrows()

    def data_frame(self):
        return self.df


class Excel(PandasModule):

    def __init__(self, fp='Result.xlsx', mode='r', df=DataFrame([]), **kwargs):
        if mode == 'w':
            self.df = DataFrame(df)
        elif mode == 'r':
            self.df = read_excel(fp, **kwargs)
        elif mode == 'a':
            if os.path.exists(fp):
                self.df = read_excel(fp, **kwargs)
            else:
                self.df = DataFrame([])
            self.append(df)

        self.fp = fp

    def save(self, header):
        i = 0
        while i<5:
            try:
                writer = ExcelWriter('temp.xlsx', 'xlsxwriter')
                self.df.to_excel(writer, sheet_name='Sheet1', columns=header, index=False)
                writer.save()
                writer.close()
                break
            except OSError:
                try:
                    del writer
                except:
                    pass
            i += 1

        if i == 5:
            if os.path.exists('temp.xlsx'):
                os.remove('temp.xlsx')
            return

        while True:
            try:
                if os.path.exists(self.fp):
                    os.remove(self.fp)
                if not os.path.exists(self.fp):
                    os.rename('temp.xlsx', self.fp)
                    break
            except PermissionError:
                print("[{}] 파일이 열려 있습니다. 10 초후 다시 실행합니다.".format(self.fp))
                time.sleep(10)


class CSV(PandasModule):
    def __init__(self, fp='Result.csv', mode='r', df=[], **kwargs):
        if mode == 'w':
            self.df = DataFrame(df)
        elif mode == 'r':
            self.df = read_csv(fp, **kwargs)
        elif mode == 'a':
            if os.path.exists(fp):
                self.df = read_csv(fp, **kwargs)
            else:
                self.df = DataFrame([])
            self.append(df)
        self.fp = fp

    def save(self, header):
        i = 0
        while i < 5:
            try:
                self.df.to_csv('temp.csv', columns=header, index=False)
                break
            except OSError:
                pass
            i += 1
        if i == 5:
            if os.path.exists('temp.csv'):
                os.remove('temp.csv')
            return

        while True:
            try:
                if os.path.exists(self.fp):
                    os.remove(self.fp)
                if not os.path.exists(self.fp):
                    os.rename('temp.csv', self.fp)
                    break
            except PermissionError:
                time.sleep(10)


class ChromeInitiator:
    debug_phantom = False
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.by import By

    def __init__(self):
        self.driver = None
        self.wait = None
        self.logger = None

    def phantom(self, wait_sec=20, *args):
        if 'pydevd' in sys.modules and not self.debug_phantom:
            self.chrome(wait_sec)
        if self.driver is None:
            while True:
                try:
                    # dc = webdriver.DesiredCapabilities.PHANTOMJS
                    # dc['javascriptEnabled'] = True
                    # self.driver = webdriver.PhantomJS(Driver.phantom_path, desired_capabilities=dc)
                    # self.wait = WebDriverWait(self.driver, wait_sec)
                    self.chrome(wait_sec, '--headless')
                    break
                except:
                    time.sleep(2)

    def chrome(self, wait_sec=20, *args):
        if self.driver is None:
            pyderman_driver_path = None
            default_option = webdriver.ChromeOptions()
            default_option.add_argument('--silent')
            # default_option.add_argument('--headless')
            default_option.set_capability('unhandledPromptBehavior', 'accept')
            for arg in args:
                default_option.add_argument(arg)
                #   Other options
            while True:
                try:
                    for i in range(3):
                        try:
                            self.driver = webdriver.Chrome(pyderman_driver_path or driver_path, chrome_options=default_option)
                            self.wait = WebDriverWait(self.driver, wait_sec)
                            self.driver.implicitly_wait(10)
                            break
                        except:
                            debugger.exception("FATAL")
                    else:
                        raise Exception

                    break
                except:
                    debugger.exception("FATAL")
                    pyderman_driver_path = install_driver()
                    time.sleep(2)

    def off(self):
        try:
            self.driver.quit()
        except:
            pass
        self.driver = None

    def wait_element(self, ec, invert=False):
        try:
            if invert:
                ret = self.wait.until_not(ec)
            else:
                ret = self.wait.until(ec)
        except TimeoutException as exc:
            try:
                if self.logger is None:
                    logging.debug("{} not found".format(ec.locator))
                else:
                    self.logger.exception("{} not found".format(ec.locator), src=self.driver.page_source)
                raise exc
            except Exception as e:
                logging.debug("Wait Error")
                raise exc

        return ret

    def get(self, url):
        while True:
            try:
                self.driver.get(url)
                break
            except WebDriverException:
                time.sleep(2)


def install_driver():
    import pyderman as dr
    try:
        pyderman_path = dr.install(browser=dr.chrome, file_directory=sys._MEIPASS, verbose=True, chmod=True,
                                   overwrite=True, version=None, filename='chromedriver.exe', return_info=False)
    except:
        pyderman_path = dr.install(browser=dr.chrome, file_directory='./', verbose=True, chmod=True,
                                   overwrite=True, version=None, filename='chromedriver.exe', return_info=False)
    debugger.info('Installed chromedriver to path: %s' % pyderman_path)
    return pyderman_path
