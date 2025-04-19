# https://leetcode.com/problems/first-missing-positive/
from typing import List

class Solution: 
    def firstMissingPositive(self, nums: List[int]):        
        i = 0
        while i < len(nums):
            idx = nums[i] - 1
            if i == idx or nums[i] == nums[idx]:
                i += 1
                continue
            if 0 <= idx < len(nums):
                nums[i], nums[idx] = nums[idx], nums[i]
            else:
                i += 1
        
        for i in range(len(nums)):
            if i + 1 != nums[i]:
                return i + 1
        
        return len(nums) + 1

sol = Solution()
res = sol.firstMissingPositive([7,8,9,11,12])
print(res)

