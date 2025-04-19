/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let maxAlt = 0;
    // Append 0 at the beginning of the array
    gain.unshift(0)
    for (let i = 1; i < gain.length; i++) {
        gain[i] = gain[i] + gain[i-1];
        maxAlt = Math.max(maxAlt, gain[i])
    }

    return maxAlt;
};

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));

/*

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.




*/