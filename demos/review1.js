"use strict"
function greeting(first, last) {
    return `Hello ${first} ${last}`;
}

let firstName = "Will";
let lastName = "Roberson";
let message = greeting(firstName, lastName);

console.log(message);