// let myPromise = new Promise((resolve, reject) => {  
//     let success = false; // This can be set based on some condition  

//     if (success) {  
//         resolve("Promise fulfilled successfully!");  
//     } else {  
//         reject("Promise rejected.");  
//     }  
// });

// myPromise  
//     .then(result => {  
//         console.log(result); // Logs: Promise fulfilled successfully!  
//     })  
//     .catch(error => {  
//         console.log(error); // Logs: Promise rejected.  
//     });

// async function sample() {
//     try {
//         const res = await myPromise;
//         console.log(res);   
//     } catch (error) {
//         console.log(error);
//     }
// }

// sample();

/*

Closures
A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). 
In other words, a closure gives a function access to its outer scope. 
In JavaScript, closures are created every time a function is created, at function creation time.

*/

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
}

init();
  

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    function someFunc() {
      console.log(name);
    }
    return someFunc
  }
  return displayName
}

makeFunc()()()


/*

https://angry-venom-ff8.notion.site/Question-3-6ed7bc6e0542440ebb3cad2b15d4b5d7


nums = [2,7,11,15], target = 9
Output: [0,1]


{ 2: 0, 7: 1, 11: 2, 15: 3 }


diff = 9-2 = 7
ans = [0, 1]

{ 2: [0], 7: [1], 3: [2,3] } 
{ 3: [0,1] }

[0,1] contains 0 then push the other value

*/



// nums = [2,7,11,15], target = 9
// // o/p: [0,1]
// const obj = {};
// const ans = [];

// // if(nums.length == 2) {
// //     if(nums[0] + nums[1] === target) {
// //         return [0,1]
// //     }
// // }



// for (let i = 0; i < nums.length; i++) {
//     if(!obj[nums[i]]) {
//         obj[nums[i]] = []
//         obj[nums[i]].push(i)
//     } else {
//         obj[nums[i]].push(i)
//     }
// }

// console.log(obj); // O(n)

// for (let i = 0; i < nums.length; i++) { // O(n)
//     const element = nums[i];
//     const diff = target - element;
//     if(obj[diff]) {
//         for (let j = 0; j < obj[diff].length; j++) { // O(1)
//             if(i != j) {
//                 ans.push(i,j);
//                 break;
//             }
//         }
//     }
//     if(ans.length) {
//         break;
//     }
// }

// console.log(ans);
