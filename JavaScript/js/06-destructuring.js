'use strict'

// Destructuring - extracting data from objects and arrays

let variable1, variable2, variable3;

[variable1, variable2, variable3] = ["I", "Love", "Javascript"];

console.log(variable1); // I
console.log(variable2); // Love
console.log(variable3); // JavaScript

let myobject = { var6: "salt", var7: "pepper" };
// console.log(var6); //salt
// console.log(var7); // pepper

// console.log(myobject.var6); // salt
// console.log(myobject.var7); // pepper

// rename:
let { var6: condiment1, var7: condiment2 } = myobject;
console.log(condiment1);
console.log(condiment2);


// ... spread operator - collates values together, and is stored in an []
const myArray = [1, 2, 3, 4, 5, 633, 22, 5, 44, 55, 66, 7788999];
// to skip over values, us a "," in its place
const [a, , , c, ...rest] = myArray;

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);

const person = {
    name: "Chris",
    middle: "P.",
    last: "Bacon",
    city: "London",
    country: "UK",
    // gender: "Female"
}

let { first, middle, last, gender = "Male" } = person;
console.log(person);
console.log(`Your human is called: ${first} ${middle} ${last}. Gender: ${gender}`);

// we use default if it doesn't exist in the object
// if it does exist, use the object value, not the default value

// // default values
// const rgb = [200];
// const [red = 255, green, blue = 255] = rgb;
// console.log(`${red}, ${green}, ${blue}`); // 255, 200, 255
// // it doesnt know that 200 - green

let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
[red, green] = rgb;
console.log(`${red} ${green} ${blue}`); // 200, 255, 50