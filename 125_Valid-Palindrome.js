/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if(s[i] != s[s.length-i-1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));