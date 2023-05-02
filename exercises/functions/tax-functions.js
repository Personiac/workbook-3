function getSocSecTax(grossPay, taxRate) {
  const taxPay = grossPay * (taxRate / 100);
  return taxPay;
}

let taxRateP = 6.2;
let amount = 100;
let taxPayAmount = getSocSecTax(amount, taxRateP);

console.log(taxPayAmount);

function getMedicareTax(grossPay, taxRate) {
  const taxPay = grossPay * (taxRate / 100);
  return taxPay;
}

// let taxRateP = 1.45;
// let amount = 100;
let taxPayAmount2 = getMedicareTax(100, 1.45);

console.log(taxPayAmount2);

function getFederalTax(wCode, grossPay) {
  switch (wCode) {
    case 0:
    case 1:
    case 2:
    case 3:
  }
}
