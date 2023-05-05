"use strict";

// let date = {
//     month: 1,
//     year: 1987,
//     day: 21,
//     weekday: 0,
//     toString: function() {
//         return `month, year, date`;
//     },
//     toUTCString: function() {
//         return `month, year, date`;
//     }
// }

// let date = new Date();
// const d = new Date();


// console.log(date);
// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleString());

// let anticipatedDate = new Date(2023, 5, 22, 7, 15, 30, 13)
// console.log(anticipatedDate.toString());

let d = new Date();
d.setMonth(1);
d.setDate(9);
d.setFullYear(1963);
console.log(d.toDateString());