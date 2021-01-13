'use strict';

// while loop
// for loop
// do while
// switch case

// for( [initial - expression]; [condition]; iterator) {
//    statement
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// difference = while loop & do while

// do while = executes at least once before
// while = checks first then runs

let x = 0;
let canIrun = false;

do {
    x++;
    console.log(x);
} while (canIrun);

// while(condition){
//     statement;
// }

let pups = 0;
let notEnoughPups = true;

while (notEnoughPups) {
    console.log("another one...");
    pups++;

    if (pups > 5) {
        notEnoughPups = false;
    }
}

// Switch case

// switch(expression){
//     case 0:
//         statement;
//     case 1:
//         statement;
// }

let day = "Monday";

switch (day) {
    case "Sunday":
        console.log(`It is Sunday`);
    case "Monday":
        console.log(`It's Monday`);
    case "Tuesday":
        console.log(`It's Tuesday`);
    case "Wednesday":
        console.log(`It's Wednesday`);
        break;
    default:
        console.log("The day isn't here...");
}

let now = new Date();
let greeting = "Good";

if (now.getHours() > 17) {
    greeting += "evening"
} else {
    greeting += "day";
}

console.log(greeting);

// Ternary If
// syntax: (condition) ? valueIfTrue : valueIfFalse

// let greeting2 = `Good` + (());