import requests
from bs4 import BeautifulSoup


header = {"user-agent": "Mozilla/5.0(Macintosh;Intel Mac OS X 10_14_5)AppleWebKit/537.36"
                        "(KHTML,like Gecko)Chrome/75.0.3770.100 Safari/537.36"}
r = requests.get(url="https://www.bilibili.com/bangumi/play/ss1192#35142",
                 headers=header)
r.encoding = r.apparent_encoding

bs = BeautifulSoup(r.text, "html.parser")

print(bs.prettify())
