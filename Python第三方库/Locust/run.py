import os
import yaml
from locust import HttpLocust, TaskSet, task


class UserBehavior(TaskSet):
    def on_start(self):
        pass

    @task(1)
    def profile(self):
        with open('./get_query.yaml', 'r', encoding='utf-8') as file:
            data = yaml.load(file)
        r = self.client.get(r'/s', params=data['params'], headers=data['headers'])
        print('请求的headers：' + str(r.request.headers))
        print('请求的url：' + str(r.url))
        print('响应码：' + str(r.status_code))
        print('响应的headers：' + str(r.headers))
        print('响应的内容：' + str(r.text))
        assert r.status_code == 200

    def on_stop(self):
        pass


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000


if __name__ == '__main__':
    os.system(r'locust -f run.py --host=https://www.baidu.com')
