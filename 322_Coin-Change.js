/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
    dp[0] = 0; // To make 0, we need 0 coins.
    for (let coin of coins) { // Check for each coin
      for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
        // if(coin == 5) {console.log(dp);}
        dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
        // dp[i - coin] + 1   -->   subtract the coin value and use up one coin
      }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
  }; 


coinChange([1,2,5], 11)

/*

coins = [1,2,5], amount = 11
3


dp = [0, 1, 2, Infinity, Infinity...]
1 to 11



i loop {
  while(coins[ i] < amount) {
    amount-= coins[i]
  }
}

5+5+1
1+1+1... 11 times
2+2+2+2+2+1
5+2+1+1+1+1

*/