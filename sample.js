// var func = function func() {
//     console.log(func === func);
//     console.log(Number("1") - 1 == 0);
// }

// func();

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     console.log(Math.min(...input.split('\n')[1].split(' ')));
// }
// let a = 16524%10;
// // console.log(16524%10);
// switch (a) {
//     case 4:
//         console.log("hehehe");
//         break;

//     default:
//         console.log("yoyo");
//         break;
// }

// let a  = new Set();

// a.add("1");
// a.add("2");
// a.add("3");
// a.add("1");

// console.log(a);
// let a = 486655;
// let b = 832.324;
// console.log(a.toString());
// console.log(b.toExponential(2));

// k = 3;
// trips = 0;
// arr = [6,4,3,3,3,2,1,1,1];
// arr = [1,1,1,1,1];
// obj = {};

// for(let i = 0; i < arr.length; i++) {
//     if(obj[arr[i]]) {
//         obj[arr[i]]++;
//         if(obj[arr[i]] === k) {
//             trips++;
//             delete obj[arr[i]];
//         }
//     } else {
//         obj[arr[i]] = 1;
//     }
// }
// for (const key in obj) {
//     trips += obj[key];
// }
// console.log(obj, trips);

// A = [1, 2, 3, 4, -10] 

// let maxSum = -Infinity;
// for(let i = 1; i < A.length; i++) {
//     if(A[i] < A[i]+A[i-1]) {
//         A[i] = A[i]+A[i-1];
//         maxSum = Math.max(maxSum, A[i]);
//     }
// }

// console.log(maxSum);

// A = [3, 4, -1, 1];


// for (let i = 0; i < A.length; i++) {
//     let idx = A[i] - 1;
//     if(i == idx || A[i] == A[idx]) continue;
//     if(idx >= i && idx <= A.length - 1) {
//         [A[i], A[idx]] = [A[idx], A[i]];
//         i--;
//     }
// }

// for(let i = 0; i < A.length; i++) {
//     if(i == A[i] - 1) continue
//     else return i+1;
// }

// return A.length + 1;

// s1 = "1,3,3,4,5,8,9";
// s2 = "2,3,6,7,10";


// s1 = s1.split(',');
// s2 = s2.split(',');

// let i = 0, j = 0, k = 0, res = Array(s1.length + s2.length).fill(0);

// while(i < s1.length && j < s2.length) {
//     if(s1[i] < s2[j]) {
//         res[k++] = s1[i++];
//     } else {
//         res[k++] = s2[j++];
//     }
// }

// console.log(res);

// while(i < s1.length) {
//     res[k++] = s1[i++];
// }

// while(j < s2.length) {
//     res[k++] = s2[j++];
// }

// res = res.join();
// console.log(res);


// function find(s1, k) {
//     // write code here

//     class MinHeap {
//         constructor() {
//             this.heap = [];
//         }
//         push(val) {
//             this.heap.push(val);
//             this.bubbleUp();
//         }
//         pop() {
//             const max = this.heap[0];
//             const end = this.heap.pop();
//             if (this.heap.length > 0) {
//                 this.heap[0] = end;
//                 this.bubbleDown();
//             }
//             return max;
//         }
//         peek() {
//             return this.heap[0];
//         }
//         bubbleUp() {
//             let idx = this.heap.length - 1;
//             const element = this.heap[idx];
//             while (idx > 0) {
//                 let parentIdx = Math.floor((idx - 1) / 2);
//                 let parent = this.heap[parentIdx];
//                 if (element >= parent) break;
//                 this.heap[parentIdx] = element;
//                 this.heap[idx] = parent;
//                 idx = parentIdx;
//             }
//         }
//         bubbleDown() {
//             let idx = 0;
//             const length = this.heap.length;
//             const element = this.heap[0];
//             while (true) {
//                 let leftChildIdx = 2 * idx + 1;
//                 let rightChildIdx = 2 * idx + 2;
//                 let leftChild, rightChild;
//                 let swap = null;
//                 if (leftChildIdx < length) {
//                     leftChild = this.heap[leftChildIdx];
//                     if (leftChild < element) {
//                         swap = leftChildIdx;
//                     }
//                 }
//                 if (rightChildIdx < length) {
//                     rightChild = this.heap[rightChildIdx];
//                     if (
//                         (swap === null && rightChild < element) || 
//                         (swap !== null && rightChild < leftChild)
//                     ) {
//                         swap = rightChildIdx;
//                     }
//                 }
//                 if (swap === null) break;
//                 this.heap[idx] = this.heap[swap];
//                 this.heap[swap] = element;
//                 idx = swap;
//             }
//         }
//     }

//     s1 = s1.split(' ');

//     let heap = new MinHeap();
//     for (let i = 0; i < k; i++) {
//         heap.push(s1[i]);
//     }
//     for (let i = k; i < s1.length; i++) {
//         if (s1[i] > heap.peek()) {
//             heap.pop();
//             heap.push(s1[i]);
//         }
//     }
//     return heap.peek();
// }


// console.log(find("1 7 3 45 3 8",3));

/*

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 


*/

// candies = [2,3,5,1,3], extraCandies = 3
// candies = [4,2,1,1,2], extraCandies = 1
// maxCandies = Math.max(...candies);
// res = [];

// for(let i = 0; i < candies.length; i++) {
//     if(candies[i] + extraCandies < maxCandies) {
//         res.push(false)
//     } else {
//         res.push(true)
//     }
// }

// console.log(res);

// str1 = "ABCABC", str2 = "ABC"


// const ar = [1];

// ar[5] = 3

// console.log(ar);





// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
  
//   foo();
// console.log(typeof a);   // => ???
// console.log(typeof b);   // => ???


// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }

// console.log(numbers); // => ???



// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }


const obj1 = { name: 'kapil' }
const obj2 = { name: 'kapil' }

console.log(obj1 == obj2)
console.log(obj1 === obj2)