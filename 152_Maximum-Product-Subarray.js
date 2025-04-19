/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxTillIndex = [nums[0]];
    let minTillIndex = [nums[0]];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        
        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i-1], num * minTillIndex[i-1]); 
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i-1], num * minTillIndex[i-1]); 

        max = Math.max(max, maxTillIndex[i]);
    }

    return max;
};

/*
nums = [2,3,-2,4]
2,6,-12,-24

nums = [-2,0,-1]
-2,0,0



*/

// nums = [-2,0,-1]
// let max = 0;
// for(let i = 1; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i-1];
//     max = Math.max(max, nums[i]);
// }
// console.log(max);