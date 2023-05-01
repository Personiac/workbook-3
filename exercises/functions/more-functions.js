"use strict";
const p1 = { name: "Jon", address: "506 Sunnyland Ave", city: "Pittsburgh", state: "PA", zip: "15227" };
const p2 = { name: "Jimmy", address: "123 Street Road", city: "My City", state: "A State", zip: "42069" };

function displayMailingLabel(name, address, city, state, zip) {
  let addressLabel = `
    Name: ${name}
    Address: ${address}
    City: ${city}
    State: ${state}
    ZIP: ${zip}`;
  console.log(addressLabel);
}

function addNumbers(num1, num2) {
  const result = num1 + num2;
  console.log(`${num1} + ${num2} = ${result}`);
}

function displayReceipt(totalDue, amountPaid) {
  console.log(`Total Due: ${totalDue}`);
  console.log(`Amount Paid: ${amountPaid}`);
  let changeDue = totalDue - amountPaid;
  switch (changeDue) {
    case changeDue < 0:
    changeDue *= -1;
    console.log(`Change Due: $${changeDue}`);
    break;
    case changeDue > 0:
    console.log(`Amount Owe: $${changeDue}`);
    break;
    case changeDue == 0:
    console.log(`Perfectly Paid!`);
    break;
  }
}

displayMailingLabel(p1.name, p1.address, p1.city, p1.state, p1.zip);
displayMailingLabel(p2.name, p2.address, p2.city, p2.state, p2.zip);
addNumbers(5, 5);
addNumbers(1, 2);
displayReceipt(15, 16);
displayReceipt(15, 15);
displayReceipt(15, 14);
