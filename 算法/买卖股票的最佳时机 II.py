"""
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
"""

# 只需要判断i+1大于i的值，就可以计算收益了


class Solution:
    @staticmethod
    def max_profit(prices):
        # 初始收益是0
        profit = 0
        i = 0
        while i < len(prices) - 1:
            if prices[i + 1] > prices[i]:
                # 上一次的收益+本次收益
                profit += prices[i + 1] - prices[i]
            i += 1
        return profit


if __name__ == '__main__':
    total_profit = Solution.max_profit([7, 1, 5, 3, 6, 4])
    print(total_profit)
