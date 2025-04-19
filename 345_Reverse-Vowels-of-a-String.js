/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let arr = s.split('');
    let i = 0, j = arr.length - 1;

    while (i < j) {
        if (vowels.has(arr[i]) && vowels.has(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (!vowels.has(arr[i])) {
            i++;
        } else {
            j--;
        }
    }

    return arr.join('');
};

/*

Input: s = "IceCreAm"

Output: "AceCreIm"


*/

let s = "IceCreAm";
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

let arr = s.split('');
let i = 0, j = arr.length - 1;

while (i < j) {
    if (vowels.has(arr[i]) && vowels.has(arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    } else if (!vowels.has(arr[i])) {
        i++;
    } else {
        j--;
    }
}

console.log(arr.join('')); // Output: "AceCreIm"

