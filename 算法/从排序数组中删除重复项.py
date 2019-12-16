"""
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
"""

# 对于有序数组，要么从小到大，要么从大到小
# 所以只需要判断相邻的值是否一样


class Solution:
    @staticmethod
    def remove_duplicates(nums):
        # 从数组下标0开始
        i = 0
        # 如果数组下标小于（数组长度-1），也就是数组最大的下标
        while i < len(nums) - 1:
            # 如果值一样，就删除第一个
            if nums[i] == nums[i + 1]:
                nums.remove(nums[i])
            # 如果不一样，就看下一个
            else:
                i = i + 1
        return nums, len(nums)


if __name__ == '__main__':
    count = Solution.remove_duplicates([1, 1, 2])
    print(count)
