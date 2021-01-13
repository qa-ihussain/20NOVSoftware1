// 'use strict'


function deposit(increment) {
    bankbalance = 100000;
    let balance = bankbalance + increment;
    return `${balance}`;
}

console.log(deposit(10));
console.log(bankbalance); // can access
// console.log(balance); // can't access
bankbalance = 10000000000000;
console.log(bankbalance);

// VAR - creates variables for you - nonononono
var x = 12;
console.log(`${x} + ${y}`); // 12, undefined 
var y = 5;

// let - stricter, 
let x2 = 12;
console.log(`${x} + ${y2}`); //
let y2 = 5;