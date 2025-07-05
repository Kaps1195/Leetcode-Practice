// hoisting
// console.log(a,b)
// var a=10;
// let b=20;

// settimeout immediately executes
// console.log(1)
// setTimeout(()=>{
// console.log(2)
// },0)
// console.log(3)

/*

1
3
2

*/

// sum(1,2) and sum(1)(2)


// function sum(a, b) {
//     return a + b;
// }

// function sum2(a) {
//     return function sum3(b) {
//         return function sum4(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(sum2(1)(2)(3));


/*

3.write a function which takes a string of parenthesis as input and returns if the parenthesis 
string is properly opened/closed

“(){}” => true
"({)}" => false


stack = [       ] -> true


*/

// function parenthesis(str) {
//     const obj = { "(": ")", "{": "}", "[": "]" };
//     const stack = [];

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         // if this element is an a,b,c { continue; }
//         // if(element) {

//         // }
//         if(obj[element]) {
//             stack.push(element)
//         } else {
//             const ele = stack.pop();
//             console.log(ele);
//             if(obj[ele] !== element) {
//                 return false;
//             }
//         }
//     }

//     if(stack.length === 0) return true;
// }


// console.log(parenthesis("(abc)")); // ignore alphabets and return true


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


None: Parle

*/


// let inventory = [
//     {
//       brand: 'Parle',
//       products: [
//         {
//           brand: 'Parle Agro',
//           products: [
//             {
//               brand: 'Frooti',
//               products: []
//             },
//             {
//               brand: 'Bailey',
//               products: []
//             }
//           ]
//         }
//       ]
//     }
// ]

// for (let i = 0; i < inventory.length; i++) {
//     const obj = inventory[i];
//     // console.log(obj.brand);
//     if(obj.products.length) {
//         for (let j = 0; j < obj.products.length; j++) {
//             const prod = obj.products[j];
//             console.log(obj.brand, prod.brand)
//         }
//     }
// }

// function recurse(inventory) {
//     console.log(inventory.brand);
//     recurse(inventory.products)
// }


/*
CRUD

Create
base-url/api/v1/user

Request body : {
    firstname: "",
    lastname: ""
    email: "",
}
try/catch
parameter validation
if a user already exists, do not create a new one again

Response : { success: true/false, msg: "User created successfully!" }

POST
Status code : 200
on failure internally handled by the developer : 500 Internal server error
any code issue/break : 4xx


Read - GET
PATH PARAMETERS
base-url/api/v1/user/some-abcd-lorem-uuid
Status code : 200

QUERY PARAMETERS
base-url/api/v1/user?id=some-abcd-lorem-uuid
Status code : 200

Update - PATCH / PUT - If the entity does not exist, it creates a new one
base-url/api/v1/user?id=some-abcd--lorem-uuid
Status code : 200
return { }

Delete - DELETE
base-url/api/v1/user?id=some-abcd--lorem-uuid
Status code : 200
Soft delete
isActive: true/false (or) 0/1
do a soft delete, update the flag to false or 0


*/