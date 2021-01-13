// print something to the screen
console.log("Hello friends");
console.info("informational log");
console.warn("Warning");
console.error("Error");


// No such thing as declaring a variable as a specific type
// 3 main types of varaibles: LET, CONST, VAR(try not to use var)

let iq = "Iqra";
let twenty = 20;
let hello = false
let float = 2.4;

console.log(typeof iq); //string
console.log(typeof twenty); //number
console.log(typeof hello); //boolean
console.log(typeof float); //number

// there is no difference in ints, floats and doubles in JavaScript

// difference between let and const?
// const = constant
// let = ability to change

const year = 2021;
// year = 2022; CANNOT DO THIS

let year2 = 2020;
year2 = 2021;
console.log(year2);

// null, undefined

// null = blank assignment
let variable; // undefined = value of an uninitialised variable
console.log(variable); // null, undefined, warning

// null = explicit keyboard that tells the runtime that it's linked to
let variable2 = null;
console.log(variable2);

// String concatenation
let str1 = "5 + 3 =";
let value = 5 + 3;
let str2 = str1 + value;
console.log(str2);

//ES2015 template literals - immediately evaluates expressions
let result = '5 + 3 = ${5+3}';
console.log(str2);

// Data types
// Number = integer, floating points, limited +253
// String = "any text"
// boolean = true/false
// null = unkown values/runtime empty
// undefined = value is not assigned
// object = store collections of data

let myNumber = 20;
let myString = `"Quotes can be freely used" 'here's another'`;
let myBool = true;
let myAge = null;
let dob;
let myObject = { key: "value", key2: "value2", key3: "value3" };

console.log(myString);
console.log(myObject);

// Javascript - you're free to change the "datatype" of a variable
// at any given type...

let number; //undefined
console.log(typeof number);
number = 1234; // number
console.log(typeof number);
number = true; // boolean
console.log(typeof number);
number = `Something`; // string
console.log(typeof number);

// ASI - Automatic Semicolon Insertion
// 1. Two lines are separated by a line terminator
// 2. When two statements are separated by a closing brace
// 3. Line terminator follows a BREAK, RETURN, THROW or CONTINUE

const HELLO = "Hi";
console.log(HELLO);

// let a = 20;

// return 2 * a + 1;

// let foo;
// bar;
// console.log(foo);
// console.log(bar);

// let foo, bar;
// console.log(foo);
// console.log(bar);

let a;
b = 3;

// let a, b = 3;