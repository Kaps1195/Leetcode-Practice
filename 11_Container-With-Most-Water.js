/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;

    while(start < end) {
        let currMax = Math.min(height[start], height[end]) * (end - start);
        maxArea = Math.max(currMax, maxArea);

        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxArea;
};


/*

height = [1,8,6,2,5,4,8,3,7]

// Two pointers approach
i = 0;
j = height.length - 1;
max = 1;

while (i < j) {
    if(height[i] < height[j]) {
        max = Math.max(max, (j - i)*height[i]) // (8-0)*1 = 8
        i++;
    } else if(height[j] < height[i]) {
        max = Math.max(max, (j - i)*height[j]) // (8-0)*1 = 8
        j--;
    } else {
        max = Math.max(max, (j - i)*height[j]);

        if(height[i+1] < height[j-1]) {
            j--;
        } else {
            i++;
        }
    }
}

Iterations: 
1 < 7 {
    max = (8-0)*1 = 8
}

7 < 8 {
    max = (8-1)*7 = 49
}

3 < 8 {
    max = (7-1)*3 = 18
}

8 == 8 {

}

6 < 8 {
    max = 
}


*/


height = [1,8,6,2,5,4,8,3,7]

// Two pointers approach
i = 0;
j = height.length - 1;
max = 1;

while (i < j) {
    if(height[i] < height[j]) {
        max = Math.max(max, (j - i)*height[i]) // (8-0)*1 = 8
        i++;
    } else if(height[j] < height[i]) {
        max = Math.max(max, (j - i)*height[j]) // (8-0)*1 = 8
        j--;
    } else {
        max = Math.max(max, (j - i)*height[j]);

        if(height[i+1] < height[j-1]) {
            j--;
        } else {
            i++;
        }
    }
}

console.log(max);