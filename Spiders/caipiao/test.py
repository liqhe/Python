import requests
from bs4 import BeautifulSoup


header = {"user-agent": "Mozilla/5.0(Macintosh;Intel Mac OS X 10_14_5)AppleWebKit/537.36"
                        "(KHTML,like Gecko)Chrome/75.0.3770.100 Safari/537.36"}
r = requests.get(url="http://kaijiang.500.com/ssq.shtml",
                 headers=header)
r.encoding = r.apparent_encoding

bs = BeautifulSoup(r.text, "html.parser")

for select_lists in bs.find_all(name="div", attrs={"class": "iSelectList"}):
    for urls in select_lists.find_all(name="a"):
        n = []
        url = urls["href"]
        req = requests.get(url=url, headers=header)
        req.encoding = req.apparent_encoding
        besoup = BeautifulSoup(req.text, "html.parser")
        for balls in besoup.find_all(name="div", attrs={"class": "ball_box01"}):
            for ball in balls.find_all(name="li"):
                ball_num = ball.text
                n.append(ball_num)
            print(n)
