/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // let res = [];
    // for(let i = 0; i < nums.length; i++) {
    //     let num = nums[i];
    //     let arr = [num];
    //     for(let j = i+1; j < nums.length; j++) {
    //         if(num < nums[j]) {
    //             // && nums[j] < arr[arr.length-1]
    //             arr.push(nums[j]);
    //         }
    //     }
    //     res.push(arr);
    // }
    if (!nums.length) return 0;
    let dp = [...nums].fill(1);
    let maxSoFar = 1;
    
    for(let j = 1; j < nums.length; j++) {
        for(let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                dp[j] = Math.max(dp[i] + 1, dp[j]);
            }
        }
    
        maxSoFar = Math.max(maxSoFar, dp[j]);
    }
    console.log(dp);
    console.log(maxSoFar); 
};

lengthOfLIS([10,9,2,5,3,7,101,18]);

/*


Input: nums = [10,9,2,5,3,7,101,18]

      0,1,2,3,4,5,6,7
dp = [1,1,1,1,1,1,1,1]
Output: 4
{10: [101,18], 9: [101,18], 2: [5,3,7,101,18]}

*/