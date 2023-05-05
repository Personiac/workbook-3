"use strict";

function estimateCost() {
  //let selectedOption = document.querySelector("input[name='policy']:checked");
  let selectedAgeCheck = document.querySelector("input[name='ageCheck']:checked");
  let total = document.getElementById("total");
  let baseRental = 29.99;
  let ageSurcharge = baseRental * parseFloat(selectedAgeCheck.value);
  let optionsCost = 0;
  let totalCost = 0;

  if (document.getElementById("toll").checked) {
    optionsCost += 3.95;
  }

  if (document.getElementById("gps").checked) {
    optionsCost += 2.95;
  }

  if (document.getElementById("roadAssist").checked) {
    optionsCost += 2.95;
  }

  if (selectedAgeCheck) {
    totalCost += ageSurcharge;
  } else {
    ageSurcharge = 0;
    return ageSurcharge;
  }

  totalCost += optionsCost;
  console.log(totalCost);

  total.innerHTML = `
            Car Rental: ${rentalCost}
            Options: ${optionsCost}
            Under 25 Surcharge: ${ageSurcharge}
            Total Cost: ${totalCost}`;
}
