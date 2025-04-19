/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let dp = new Array(nums.length).fill(false);
    dp[0] = true;
    
    for(let j = 1; j < nums.length; j++) {
        for(let i = 0; i < j; i++) {
            if(dp[i] && i+nums[i] >= j) {
                dp[j] = true;
                break;
            } 
        }
    }
    
    return dp.pop();    
};


/*

*/