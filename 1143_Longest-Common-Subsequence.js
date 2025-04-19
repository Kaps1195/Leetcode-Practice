/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length).fill(0);
    let longest = 0;

    for (const c of text2) {
        let curLength = 0;
        for (let i = 0; i < dp.length; i++) {
            if (curLength < dp[i]) {
                curLength = dp[i];
            } else if (c === text1[i]) {
                dp[i] = curLength + 1;
                longest = Math.max(longest, curLength + 1);
            }
        }
    }

    return longest;
};

/*


Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.




while(text1.length && text2.length) {


}

*/