'use strict';

// Method 1: accessing the object() class
let student = new Object();

student.name = "Iqra";
student["id"] = 123;
// student.name = "Nick"; // Not best practice to override an ex



// Method 2:
let iqra = { name: "Iqra", id: 123, courseCode: "JSFUND" };

console.log(student);
console.log(iqra);


console.log(iqra.name);
console.log(iqra['id']);

const classroom = [
    { name: "iqra", id: 123, courseCode: "JSFUND" },
    { name: "jim", id: 234, courseCode: "JSFUND" },
    { name: "bob", id: 345, courseCode: "JSFUND" },
    { name: "tom", id: 456, courseCode: "JSFUND" },
    34,
    true,
    false
]

for (let i = 0; i < classroom.length; i++) {
    console.log(classroom[i]);
    for (let key in classroom[i]) {
        console.log(`Key: ${classroom[i[key]]}`);
    }
}

// JSON

let myJSONObject = {
    "Users": [
        { "username": "jimbob123", "password": "hello123" },
        { "username": "bobjim123", "password": "123hello" }
    ]
}

let strObj = `{"name":"iqra"}`;
console.log(typeof strObj);

let obj = JSON.parse(strObj);
console.log(typeof obj);

// JSON STRINGIFY = takes in an object, and spits out a string
console.log(obj);
let convertmeback = JSON.stringify(obj);
console.log(convertmeback);
console.log(typeof convertmeback);