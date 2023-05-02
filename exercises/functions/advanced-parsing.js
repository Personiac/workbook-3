"use strict";

function parseAndDisplayName(name) {
    let spaceChar = name.indexOf(" ");
    let spaceAfter = spaceChar + 1;
    let firstName = name.substring(0,spaceChar);
    //let middleName = name.substring
    let lastHalf = name.substring(spaceAfter);
    let spaceChar2 = lastHalf.indexOf(" ");
    let spaceAfter2 = spaceChar2 + 1;
    let middleName = lastHalf.substring(0,spaceChar2);
    let lastName = lastHalf.substring(spaceAfter2);
    
    console.log("The space is at position " + name.indexOf(" "));
    
    console.log(`Name: ${name}
    First name: ${firstName}
    Middle Name: ${middleName}
    Last name: ${lastName}`);
    console.log(`Last half of the name is ${lastHalf}`);
    console.log(`The second space is located at ${spaceChar2}`);
}

parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
