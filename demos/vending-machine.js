let coin = "Dime";
let choice = "A2";

function vendingMachine(coinSlot, selection) {
    if (coinSlot == "Quarter") {
        switch (selection) {
          case "A1":
            console.log("Crunch");
            break;
          case "A2":
            console.log("M&Ms");
            break;
          case "A3":
            console.log("Caramel");
            break;
        }
    }
    else if (coinSlot == "Dime") {
        switch (selection) {
            case "A1":
              console.log("Gatorade");
              break;
            case "A2":
              console.log("Milk");
              break;
            case "A3":
              console.log("Water");
              break;
          }
    }
    else {
        console.log("Invalid transaction");
    }
}

vendingMachine(coin,choice);