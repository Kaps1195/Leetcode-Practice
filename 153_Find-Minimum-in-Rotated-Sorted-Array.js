/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    if(nums.length == 1) {
        return nums[0]
    }

    if(nums[left] < nums[right]) {
        return nums[left]
    }

    while(left <= right) {
        const mid = Math.floor((left+right) / 2);

        const leftVal = nums[left];
        const midVal = nums[mid];
        const leftOfMid = nums[mid - 1];
        const rightOfMid = nums[mid + 1];


        if(midVal > rightOfMid) {
            return rightOfMid
        } else if(midVal < leftOfMid) {
            return midVal;
        }

        // search in right half
        if(midVal > leftVal) {
            left = mid + 1;
        } 
        // search in left half
        else {
            right = mid - 1;
        }
    }
};


/*
nums = [4,5,6,7,0,1,2]

left = 0
right = 7

mid = 0+7 / 2 = 3

left = 0
leftMid = 2
rightMid = 4



*/
