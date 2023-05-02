"use strict";

function parseAndDisplayName(name) {
    let spaceChar = name.indexOf(" ");
    let spaceAfter = spaceChar + 1;
    let firstName = name.substring(0,spaceChar);
    let lastName = name.substring(spaceAfter);
    
    console.log("The space is at position " + name.indexOf(" "));
    
    console.log(`Name: ${name}
    First name: ${firstName}
    Last name: ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");