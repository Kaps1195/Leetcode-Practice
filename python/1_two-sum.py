from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}
        for index, num in enumerate(nums):
            obj['num'] = index
        
        for index, num in enumerate(nums):
            diff = target - num
            if obj.get(diff):
                return [num, diff]
            
sol = Solution()
nums = [2,7,11,15]
target = 9
res = sol.twoSum(nums, target)
print(res)