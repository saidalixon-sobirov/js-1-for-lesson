"use strict";

// const arr1 = [1,4,5,6]

// const arr2 = ["a", "b", "c"]

// const arr3 = arr2.concat(arr1);

// console.log(arr3);

/* ----------------------------- String methods ----------------------------- */

// const text = "JavaScript qiziqarli dasturlash tili";

// console.log(text);

// console.log(text.search("m"));

// console.log(text.slice(0,30));

// console.log(text.concat(" U asosan frontendda ishlatiladi."));

// console.log(text.charAt(0));

// console.log(text.match("a"))

// console.log(text.replace("Java", "Py")); // almashtirish
// console.log(text.replace(/a/g, "A"));  // almashtirish

// console.log(text.toLowerCase()); // kichik shaklga o'giradi

// console.log(text.toUpperCase());  // katta harfga o'giradi

// console.log(text.length);

// const text1 = text.trim();  // no space

// console.log(text1);
// console.log(text1.length);

/* ------------------------ Object and Object methods ----------------------- */

// const person = new Object({
//   name: "Ali", // key :  value,
//   last_name: "Zokirov",
//   haveCar: true,
//   age: 33,
//   extraInfo: [170, 65],
//   parentInfo: {
//     fathername: "Vali",
//     mothername: "Zebo",
//     fatherInfo: ["Tracker", "white", 2022],
//   },
// });

// console.log(person["parentInfo"]["fatherInfo"][2]);



// const person = {
//   name: "Ali", // key :  value,
//   last_name: "Zokirov",
//   haveCar: true,
//   age: 33,
//   extraInfo: [170, 65],
//   parentInfo: {
//     fathername: "Vali",
//     mothername: "Zebo",
//     fatherInfo: ["Tracker", "white", 2022],
//   },
// };

// console.log(person.parentInfo.fatherInfo[0]);


/* ----------------------------------- DOM ---------------------------------- */

// let a = document.getElementsByTagName("p");

// let a = document.getElementById("text")

// let a = document.getElementsByClassName("title")

// let a = document.querySelector("p")

let a = document.querySelectorAll("p")

console.log(a);