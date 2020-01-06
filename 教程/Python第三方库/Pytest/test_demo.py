# -*- coding: UTF-8 -*-


class TestClass:
    @staticmethod
    def func(x):
        return x + 1

    def test_func(self):
        print('测试')
        assert self.func(3) == 5

    def test_one(self):
        x = "this"
        assert 'h' in x

    def test_two(self):
        x = "hello"
        assert hasattr(x, 'check')
