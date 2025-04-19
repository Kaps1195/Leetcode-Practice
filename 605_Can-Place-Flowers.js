/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n == 0) {
        return true
    }
    
    for(let i = 0; i < flowerbed.length; i++) {
        let num = flowerbed[i];
    
        if(num === 0) {
            if(flowerbed[i-1] != 1 && flowerbed[i+1] != 1) {
                n--;
                flowerbed[i] = 1
            }
        }
        
        if(n == 0) {
            return true;
        }
    }

    return false;
};

console.log(canPlaceFlowers([1,0,1,0,1,0,0,0,0,1,0,1], 3));

/*

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true


flowerbed = [1,0,1,0,1,0,0,0,0,1,0,1] n = 1
Output: 

[0,0,0]

for(let i = 0; i < flowerbed.length; i++) {
    let num = flowerbed[i];

    if(num === 0) {
        if(flowerbed[i-1] != 1 && flowerbed[i+1] != 1) {
            n--;
        }
    }
}

if(n == 0) {
    return true
}

return false

*/