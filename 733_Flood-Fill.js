/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    var oldColor = image[sr][sc];
  
    if(color == oldColor)
      return image;
    
    image[sr][sc] = color;
    
    if(sr > 0 && image[sr - 1][sc] == oldColor)
      floodFill(image, sr - 1, sc, color); //Left
    
    if(sc > 0 && image[sr][sc - 1] == oldColor)
      floodFill(image, sr, sc - 1, color); //Up
  
    if(sr < image.length - 1 && image[sr + 1][sc] == oldColor)
      floodFill(image, sr + 1, sc, color); //Down
        
    if(sc < image[0].length - 1 && image[sr][sc + 1] == oldColor)
      floodFill(image, sr, sc + 1, color); // Right
        
    return image;
};

image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

console.log(floodFill(image, sr, sc, color));

/**
1,1

i-1,j
i,j-1
i+1,j
i,j+1

*/