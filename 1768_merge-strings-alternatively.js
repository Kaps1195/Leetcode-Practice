/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// var mergeAlternately = function(word1, word2) {
//     let resultString = "";
//     let appendRestOfTheWordIndex;
//     for (let i = 0; i < word1.length; i++) {
//         resultString += word1[i];
//         if(i < word2.length) {
//             resultString += word2[i];
//         }
//         appendRestOfTheWordIndex = i+1;
//     }

//     resultString+=word2.slice(appendRestOfTheWordIndex);

//     return resultString;
// };


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = "";
    
    // Store maximum length in a constant for efficiency during iterations
    const maxLength = Math.max(word1.length, word2.length); 
 
    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) result += word1[i];
        if (i < word2.length) result += word2[i];
    }
    
    return result;
 };

console.log(mergeAlternately("abcd","pq"));