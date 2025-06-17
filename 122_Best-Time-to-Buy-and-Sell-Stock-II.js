/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // Output: 7

/*

Input: prices = [7,1,5,3,6,4]
Output: 7
ans = 5-1 + 6-3 = 7

1,5 
1,3 
1,6
1,4


1,5,3,9


*/