/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = nums.map(n => 1);
    let product = 1;

    for(let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i];
    }
    console.log(output);

    product = 1;
    for(let j = nums.length - 1; j >= 0; j--) {
        output[j] = output[j] * product;
        product = product * nums[j]; 
    }

    return output;
};


productExceptSelf([1,2,3,4]);

/*

Input: nums = [1,2,3,4]
Output: [24,12,8,6]




*/

