/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const endChar = s[i];
        if(windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    // console.log(maxLength);
    return maxLength;
};

lengthOfLongestSubstring("abcabcbb");

/*

s = "abcabcbb"
windowCharsMap = {
    a: 0,
    b: 1,
    c: 2
}



*/