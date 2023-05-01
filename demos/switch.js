let money; 
let coin = {penny: 1, nickel: 5, dime: 10, quarter: 25};

let coinSlot = coin.nickel;

switch(coinSlot) {
    case coin.penny:
    console.log(coin.penny + " cent");
    break;
    case coin.nickel:
    console.log(coin.nickel + " cents");
    break;
    case coin.dime:
    console.log(coin.dime + " cents");
    break;
    case coin.quarter:
    console.log(coin.quarter + " cents");
    break;
    case unknown:
    console.log("Not a coin.");
    break;
}

