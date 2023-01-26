// "use strict";

// /*
// scope
// function types => fn declaration, f-n expression, arrow f-n
// */

// // var, let, const

// // global scope

// // const y = 34;

// // function sayHello(a) {
// //   var x = "JS";

// //   if (x == a) {
// //     console.log(a);
// //     var user = "Ali";

// //     console.log(y);
// //   }

// //   console.log(y);
// // }

// // sayHello("JS");

// // {
// //   {
// //     {
// //       {
// //         {
// //           var a = 34;
// //         }
// //       }
// //     }
// //   }
// // }

// // console.log(a);

// // functions

// // function declaration

// // myName(4,5,6);
// // hoisting

// function myName(arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
// }

// myName(4,5,6);

// // function expression

// const load = function(x,y) {
//   console.log(x + y);
// }

// load(3,4);

// // arrow function

// // const arrFunc = () => console.log("Salom");

// const arrFunc = () => {
//   console.log("Ali");
//   console.log("Ali");
//   console.log("Ali");
//   console.log("Ali");
//   console.log("Ali");
// }

// arrFunc();

/* ---------------------------------- ARRAY --------------------------------- */

// const languages = new Array("java", "javascript", "php", "GO lang", 12, true, undefined, null);

const arr1 = [];

arr1[0] = "Java";

arr1[1] = "Javascript";

arr1[129] = "PHP";

// console.log(arr1);

const arr2 = ["java", "javascript", "php"];

// methods
arr2.push("C++"); // array oxiridan qo'shadi
arr2.push("python", "go");

arr2.unshift("HTML"); // array boshidan qo'shadi

const copyArr2 = arr2;

copyArr2.push("CSS");

// console.log(arr2);
// console.log(copyArr2);


const crop = arr2.slice(2,5);  // ctrl + c  - nusxa olish

// crop.push("ALI");

// console.log(crop);

// console.log(arr2);  // qiymat o'zgarmaydi


// const cut = arr2.splice(2,4);  // ctrl + x - kesib olish

// console.log(cut);

// console.log(arr2);     //  qiymati o'zgaradi   





// console.log(arr2);


// arr2.shift()   // boshidan olib tashlaydi
// arr2.pop()   // oxirdan olib tashlaydi

// console.log(arr2);

// const n = arr2.includes("HTML")
// const m = arr2.indexOf("bek")

// // console.log(n);
// console.log(m);