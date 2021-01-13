// Exercise 1
function subCalc(num1, num2) {
    return num1 - num2;
}

console.log(subCalc(10, 1000));

// Exercise 2
const welcome = function(name, age, gender) {
    return console.log(`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}

welcome("Felix Cited", 20, "Male");

// Exercise 3
powerUp = (n1, n2) => Math.pow(n1, n2);

console.log(powerUp(3, 3));
//Output: 27