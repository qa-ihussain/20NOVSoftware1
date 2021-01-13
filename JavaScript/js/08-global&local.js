'use strict';

function someFunction() {
    let hello = "billy bob joe";
    console.log(hello, "called from the function");
}

someFunction();
//console.log(hello); //hello is NOT defined here!!

let check = false;

function changeCheck() {
    check = true;
}

console.log(check); // false
changeCheck();
console.log(check); //true

// GLOBAL SCOPE
var flag = true;

function test() {
    flag = true;
    alert(flag); //true
    test1();
    alert(flag); //false
}
// LOCAL SCOPE
function test1() {
    let flag = false;
    return;
}

test();
// compilation error - same variable name
// error - haven't defined flag x2
// true false
// true true x 2

// Scope = always look inside before you go elsewhere