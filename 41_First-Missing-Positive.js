/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // set all -ve values to 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            nums[i] = 0;
        }
    }

    // set the values where the number should exist to -ve of that number
    // else if it's 0, set it to -ve of out of bounds
    for (let i = 0; i < nums.length; i++) {
        const val = Math.abs(nums[i]);
        if(1 <= val <= nums.length) {
            if(nums[val - 1] > 0) {
                nums[val - 1] *= -1;
            } else if(nums[val - 1] == 0) {
                nums[val - 1] = -1 * (nums.length + 1);
            }
        }
    }

    // loop all nums from 1 to nums.length + 1
    // if the value is positive, it means it does not exist in the array, return i
    for (let i = 1; i < nums.length + 1; i++) {
        if(nums[i - 1] >= 0) {
            return i;
        }
    }

    // otherwise return highest number
    return nums.length + 1;
};