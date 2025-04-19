/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let cheapestPrice = prices[0];
    for(let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if(price < cheapestPrice) {
            cheapestPrice = price;
        }

        let currentProfit = price - cheapestPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
};

/*

prices = [7,1,5,3,6,4]


*/