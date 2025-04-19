/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let currentRow = new Array(n).fill(1);
  // Assigning a 1 to matrix[0][0] is simply a shortcut that skips some later computation
  // as matrix[i][0] will never change in this iterative process
//   for (let i = 0; i < n; i++) {
//       currentRow[i] = 1;
//   }
  
  console.log(currentRow);
  for (let row = 1; row < m; row++) { 
      for (let i = 1; i < n; i++) {
          console.log({row, i});
          currentRow[i] += currentRow[i - 1];
          console.log(currentRow);
      }
  }
  return currentRow[n - 1];
};

uniquePaths(3,2)