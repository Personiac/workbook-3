"use strict";

let birthDate = new Date("06/16/1998");
console.log(birthDate.toLocaleDateString());

let momBirthDate = new Date("DEC 21 1969");
console.log(momBirthDate.toDateString());

let dadBirthDate = new Date(1965, 4, 6);
console.log(dadBirthDate.toLocaleDateString());
