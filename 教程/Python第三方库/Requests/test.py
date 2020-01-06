# -*- coding: UTF-8 -*-
import requests

print(requests)

r = requests.get('https://www.baidu.com/')

print(r.status_code)

print(r.headers)

print(r.encoding)

print(r.text)

# print(r.json())
