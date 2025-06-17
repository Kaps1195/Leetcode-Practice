/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    const total = matrix.length * matrix[0].length;

    while (result.length < total) {
        for (let col = left; col <= right && result.length < total; col++) {
            result.push(matrix[top][col]);
        }
        top++;

        for (let row = top; row <= bottom && result.length < total; row++) {
            result.push(matrix[row][right]);
        }
        right--;

        for (let col = right; col >= left && result.length < total; col--) {
            result.push(matrix[bottom][col]);
        }
        bottom--;

        for (let row = bottom; row >= top && result.length < total; row--) {
            result.push(matrix[row][left]);
        }
        left++;
    }

    return result;
};