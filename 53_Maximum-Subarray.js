/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
        currentMax = Math.max(nums[i], currentMax);
    }
    return currentMax;
};


console.log(maxSubArray([-1,-2]));

/*

nums = [-2,1,-3,4,-1,2,1,-5,4]


*/