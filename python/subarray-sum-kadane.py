from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = nums[0]
        for i in range(1, len(nums)):
            nums[i] = max(nums[i], nums[i]+nums[i-1])
            ans = max(ans, nums[i])
        return ans

sol = Solution()
res = sol.maxSubArray([1,2])
print(res)



x = 4-1 
for i in range(x): print(f"Loop iteration {i}")