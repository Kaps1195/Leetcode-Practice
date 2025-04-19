/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsVisited = {};
    let res = [];
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        
        if (numsVisited[complement] != undefined) {
            res.push(i);
            res.push(numsVisited[complement]);
            console.log(numsVisited); 
            return res;
        }
        numsVisited[num] = i;
    }
};

twoSum([2,7,11,15], 9)

// const obj = {};
// let res = [];


// for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let diff = target - num;

//     if(obj[diff]) {
//         res.push(i);
//         res.push(obj[diff])
//         return res;
//     }
//     obj[diff] = i
// }

// nums = [2,7,11,15], target = 9
// const obj = {};

// for (let i = 0; i < nums.length; i++) {
//     if(obj[nums[i]]) {
//         continue;
//     } else {
//         obj[i] = nums[i] 
//     }   
// }

// for(let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const secondNum = target - num;
//     if(obj[secondNum] != ) {

//     }
// }


// console.log(obj);
// // {0: 2, 1: 7, 2: 11, 3: 15}