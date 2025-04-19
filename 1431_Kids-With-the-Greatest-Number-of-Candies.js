/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    const maxCandies = Math.max(...candies);
    const res = [];

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies < maxCandies) {
            res.push(false)
        } else {
            res.push(true)
        }
    }

    return res;  
};