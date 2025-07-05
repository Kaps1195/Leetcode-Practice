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

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }

// init();
  

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     function someFunc() {
//       console.log(name);
//     }
//     return someFunc
//   }
//   return displayName
// }

// makeFunc()()()


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

// const arr = [
//  {
//                 "id": 1,
//                 "name": "Refactor Main Web App",
//                 "isActive": false
//             },
//             {
//                 "id": 2,
//                 "name": "The LOTRY App",
//                 "isActive": true
//             },
//             { "id": 3,
//                 "name": "skdmjkasj",
//                 "isActive": false
//             },
// ];

// console.log(arr.sort((a, b) => {a.id - b.id})); // Sorts by id in ascending order

// console.log(arr.filter((project) => project.isActive).sort((a, b) => a.id - b.id)); // Finds the item with id 1

// router.get('/:id', (req, res) => {



// Despite its name, NaN is classified as a number within JavaScript's type system 
// because it arises from numerical computations and exists within the Number type's 
// set of possible values.

// console.log(typeof NaN);

// console.log(typeof (1+"2"));

// number to string conversion
// const num = 12;
 
// String(num); // "12"
// num.toString(); // "12"
// num + ""; // "12"

// string to number conversion
// const str = "12";
 
// Number(str); // 12
// +str; // 12
// parseInt(str); // 12

// console.log(Math.round(3.2));


// why?
// This is due to the way floating-point numbers are represented in binary, which can lead to
// precision errors in certain calculations. In this case, 0.1 and 0.2 cannot be represented exactly in binary, 
// so when they are added together, the result is slightly less than 0.3, causing the comparison to return false.
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false 


// function executor(fn) {
//     fn();
// }

// function myFunction() {
//     console.log("Hello, World!");
// }

// executor(myFunction); // Outputs: Hello, World!


// arguments is an array-like object that contains the values of the arguments passed to the function
// It is not an actual array, but it has a length property and can be accessed
// using indices like an array.
// function func() {
//   console.log("arguments", arguments)
//   for (let key in arguments) {
//     console.log(arguments[key]);
//   }
// }

// // driver code
// func({name: "John", age: 30, city: "New York"});

// function func(a, b, c) {
//   if (func.length === arguments.length) {
//     console.log("Number of arguments passed match the expected arguments");
//   } else {
//     throw new Error(
//       "Number of arguments passed do not match the expected arguments"
//     );
//   }
// }

// func(1, 2, 3); // No error
// // func(1, 2); // Error: Number of arguments passed do not match the expected


// setTimeout(() => {
//     console.log("This is a delayed message");
// }, 1000); // Executes after 1 second


// iife
// (function IIFE() {
//   console.log("I am an Immediately invoked function");
// })();


// function* multipleValueReturnFunc() {
//   const a = 5,
//     b = 10;
//   yield a;
//   yield b;
// }
 
// // driver code
// const iterator = multipleValueReturnFunc();
// const x = iterator.next().value;
// const y = iterator.next().value;

// console.log({ x, y });


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }


// class Employee extends Person {
//   constructor(name, age) {
//     super(name, age); // Call the parent class constructor
//     this.position = "Software Engineer";
//   }
//   getDetails() {
//     return `${super.getDetails()}, Position: ${this.position}`;
//   }
// }

// const emp = new Employee("Kapil", 29);
// console.log(emp.getDetails()); // Outputs: Name: Kapil, Age: 29, Position: Software Engineer


// currying
// function multiply(num1) {
//   return function (num2) {
//     return function (num3) {
//       return num1 * num2 * num3;
//     };
//   };
// }

// console.log(multiply(2)(3)(4)); // Outputs: 24

// // shallow copy vs deep copy
// const obj1 = {  name: "Kapil", age: 29 };
// const obj2 = Object.assign({}, obj1); // Shallow copy
// obj2.name = "John";
// console.log(obj1.name); // Outputs: Kapil (obj1 is unchanged)
// const obj3 = JSON.parse(JSON.stringify(obj1)); // Deep copy
// obj3.name = "Doe";
// console.log(obj1.name); // Outputs: Kapil (obj1 is unchanged)


// for (const key in obj1) {
//   console.log(key, obj1[key]);
// }


// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// const obj = {
//     name: "Kapil",
//     age: 29
// }

// console.log(obj?.name || "Default Name"); // Outputs: Kapil


// const arr = [1, 2, 3, 4, 5];

// arr.splice(2, 1); // Removes the element at index 2 (which is 3)
// console.log(arr); // Outputs: [1, 2, 4, 5]

// arr.length = 0
// console.log(arr);
// console.log(Array.isArray(arr));

// function asyncFunc() {
//   console.log("Started asyncFunc1");
//   //Async1 code
//   setTimeout(() => {
//     console.log("Completed asyncFunc1");
//     console.log("Started asyncFunc2");
//     //Async2 code
//     setTimeout(() => {
//       console.log("Completed asyncFunc2");
//       console.log("Started asyncFunc3");
//       //Async3 function code
//       setTimeout(() => {
//         console.log("Completed asyncFunc3");
//       }, 1000);
//     }, 2000);
//   }, 3000);
// }
// asyncFunc();

// Output:
/*
Started asyncFunc1
Completed asyncFunc1
Started asyncFunc2
Completed asyncFunc2
Started asyncFunc3
Completed asyncFunc3
*/

// const getPromiseData = () => {
//   return new Promise((resolve, reject) => {
//     resolve({
//       name: "Kapil",
//       age: 29
//     })
//   })
// }

// const getData = async () => {
//   try {
//     const data = await getPromiseData();
//     console.log(data); // Outputs: { name: 'Kapil', age: 29 }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();


// const posts = async () => {
//   const p = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   const data = await p.json();
//   return data;
// }

// const getPosts = async () => {
//   try {
//     const data = await posts();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }
// } 

// getPosts();

// Promise.race

// function asyncFunc1() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("Resolved async1");
//     }, 2000)
//   );
// }
// function asyncFunc2() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       resolve("Resolved async2");
//     }, 3000)
//   );
// }
// function asyncFunc3() {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("Rejected async3");
//     }, 1000)
//   );
// }
// // driver code
// const asyncArr = [asyncFunc1, asyncFunc2, asyncFunc3];
// const promiseArr = asyncArr.map((async) => async());
// Promise.race(promiseArr).then(console.log).catch(console.log); // Rejected async3 (catch block)

/*

2. Print all the brand names with their parent name by traversing through this JSON. For top level brands use parent as "None".
Hint : Use Stack 
Can print in any order
e.g. 
None : Parle
Parle : Parle Agro
Parle Agro : Frooti
Parle Agro : Bailey
None: Pepsico
Pepsico: VB
etc


None: Parle

*/


let inventory = [
  {
    brand: 'Parle',
    products: [
      {
        brand: 'Parle Agro',
        products: [
          {
            brand: 'Frooti',
            products: []
          },
          {
            brand: 'Bailey',
            products: []
          }
        ]
      }
    ]
  },
  {
    brand: 'Pepsico',
    products: [
      {
        brand: 'VB',
        products: [
          {
            brand: 'Lays',
            products: []
          },
          {
            brand: 'Kurkure',
            products: [
              {
                brand: 'Mad Angles',
                products: []
              }
            ]
          }
        ]
      },
      {
        brand: 'Pepsi',
        products: []
      }
    ]
  },
  {
    brand: 'Cadbury',
    products: []
  }
];


// STACK APPROACH, ITERATIVE DEPTH-FIRST SEARCH (DFS)
// This approach uses a stack to traverse the inventory tree structure iteratively.

/*
const result = [];
const stack = [];

// Push all top-level brands into the stack
for (let item of inventory) {
  result.push(`None : ${item.brand}`);
  stack.push({ parent: item.brand, children: item.products });
}

while (stack.length > 0) {
  const { parent, children } = stack.pop();

  for (let child of children) {
    result.push(`${parent} : ${child.brand}`);
    if (child.products.length > 0) {
      stack.push({ parent: child.brand, children: child.products });
    }
  }
}

console.log(result);
*/


/*

RECURSIVE APPROACH

const result = [];

function recursivePush(parent, products) {
  while (products.length > 0) {
    const product = products.shift();
    result.push(`${parent} : ${product.brand}`);
    if (product.products.length > 0) {
      recursivePush(product.brand, product.products);
    }
  }
}

for (let i = 0; i < inventory.length; i++) {
  const product = inventory[i];
  result.push(`None : ${product.brand}`);

  if(product.products.length > 0) {
    recursivePush(product.brand, product.products);
  }
}

console.log(result);
*/



// String manipulation example
// str = "Hello World";
// console.log(str.split(" ").join("_"));
// console.log(str.replaceAll(" ", "_"));


// const person = {
//   name: "Rajat",
//   getName: function() {
//     return this.name;
//   }
// }

// const developer = {
//   name: "Dev",
//   getName: person.getName
// }

// const tester = {
//   name: "QA"
// }

// function execute(fn) {
//   console.log("1:", fn());
// }

// execute(person.getName)
// execute(developer.getName)
// execute(person.getName.bind(tester))
// execute(developer.getName.bind(person))
// why do the below two functions not work?
// answer: because `call` and `apply` are methods of the function object, not the object itself.
// to fix this, we can use `bind` to create a new function with the correct context.
// execute(person.getName.call(developer))
// execute(person.getName.apply(tester))


// const EventEmitter = require('events');

// // Create a new emitter instance
// const emitter = new EventEmitter();

// // Register an event listener
// emitter.on('greet', (name) => {
//   console.log(`Hello, ${name}!`);
// });

// // Emit the event
// emitter.emit('greet', 'Kapil');  // Output: Hello, Kapil!






// function numInStr(arr) {
//   console.log(arr.filter(str => /[0-9]/.test(str)))
// }

// // Example
// numInStr(['1a', 'a', '2b', 'b']);              // ['1a', '2b']
// numInStr(['abc', 'abc10']);                    // ['abc10']
// numInStr(['abc', 'ab10c', 'a10bc', 'bcd']);    // ['ab10c', 'a10bc']
// numInStr(['this is a test', 'test1']);         // ['test1']


