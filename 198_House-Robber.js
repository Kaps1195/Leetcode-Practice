/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0) return 0
    if(nums.length == 1) return nums[0]
    if(nums.length == 2) return Math.max(nums[0], nums[1])
    
    let maxArray = [nums[0], Math.max(nums[0], nums[1])]

    for(let i = 2; i < nums.length; i++) {
        maxArray.push(Math.max(maxArray[i-1], nums[i] + maxArray[i-2]));
    }

    return maxArray.pop();
};