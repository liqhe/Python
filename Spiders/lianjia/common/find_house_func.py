import requests
from bs4 import BeautifulSoup


header = {"user-agent": "Mozilla/5.0(Macintosh;Intel Mac OS X 10_14_5)AppleWebKit/537.36"
                        "(KHTML,like Gecko)Chrome/75.0.3770.100 Safari/537.36"}


def find_house(school, streets):
    with open(school+".txt", "w") as f:

        print(school)
        f.write(school+"\n")

        for street in streets:

            print(street)
            f.write("\t"+street+"\n")

            # 访问链家的查询街道结果页面
            r = requests.get(url="https://cd.lianjia.com/ershoufang/rs"+street+r"/",
                             headers=header)
            r.encoding = r.apparent_encoding
            bs = BeautifulSoup(r.text, "html.parser")

            dicts = {}
            arr = []
            new_arr = []

            # 抓取网页数据
            for tag_father in bs.find_all(name="div", attrs={"class": "bigImgList"}):
                for tag in tag_father.find_all(name="div", attrs={"class": "item"}):
                    # 网址
                    url = tag.find(name="a", attrs={"class": "img"})["href"]
                    # 价格
                    price = tag.find(name="div", attrs={"class": "price"}).text
                    # 信息
                    info = tag.find(name="div", attrs={"class": "info"}).text
                    # 取价格的绝对值，用于排序
                    number = tag.find(name="div", attrs={"class": "price"}).span.string
                    # 访问房屋的具体信息页面
                    r1 = requests.get(url=url, headers=header)
                    r1.encoding = r1.apparent_encoding
                    bs1 = BeautifulSoup(r1.text, "html.parser")
                    # 房屋地址
                    address = bs1.find(name="a", attrs={"target": "_blank", "class": "info"}).string
                    # 将数据存入数组
                    dicts[number] = "\t\t"+price+"\t"+address+"\t"+info+"\t\t"+url

            # 按价格升序排序, 冒泡排序算法
            for key, val in dicts.items():
                arr.append(eval(key))
            for m in range(1, len(arr)):
                for n in range(0, len(arr) - m):
                    if arr[n] > arr[n + 1]:
                        arr[n], arr[n + 1] = arr[n + 1], arr[n]
            for l in arr:
                new_arr.append(dicts[str(l)])
            for infom in new_arr:
                print(infom)
                f.write(infom+"\n")
