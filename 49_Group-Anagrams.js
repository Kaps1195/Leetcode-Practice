/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let grouped = {};

    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        
        const key = word.split('').sort().join('');

        if(!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(word);
    }
    // console.log(grouped);
    return Object.values(grouped);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);

/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","t ea"]]



*/