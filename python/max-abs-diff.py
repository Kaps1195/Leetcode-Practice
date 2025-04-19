# def max_arr(A):
#     def all_equal(arr):
#         return all(v == arr[0] for v in arr)
    
#     if all_equal(A):
#         return len(A) - 1
    
#     array = A
    
#     max1 = float('-inf')
#     min1 = float('inf')
#     max2 = float('-inf')
#     min2 = float('inf')

#     for i in range(len(array)):
#         max1 = max(max1, array[i] + i)
#         min1 = max(min1, array[i] + i)
#         max2 = max(max2, array[i] - i)
#         min2 = max(min2, array[i] - i)
    
#     print(max1 - min1, max2 - min2)

#     return max(max1 - min1, max2 - min2)


def maxArr(nums):
    mx1 = float('-inf')
    mn1 = float('inf')
    mx2 = float('-inf')
    mn2 = float('inf')
    
    for i in range(len(nums)):
        # for eq 1
        mx1 = max(mx1, nums[i] + i)
        mn1 = min(mn1, nums[i] + i)
        
        # for eq2
        mx2 = max(mx2, nums[i] - i)
        mn2 = min(mn2, nums[i] - i)
    
    ans1 = mx1 - mn1
    ans2 = mx2 - mn2
    return max(ans1, ans2)

res = maxArr([1, 3, -1])
print(res)
