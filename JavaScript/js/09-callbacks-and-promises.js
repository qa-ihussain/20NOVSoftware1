'use strict';

// callbacks - a function that takes in a function

// first function
const greeting = (fullname) => {
    alert(`Hello ${fullname}`);
}

// second function
const processUserInput = (callback) => {
    // get the user to type their name
    let humansname = prompt(`Please enter your name`);
    // once the user has entered their name
    callback(humansname);
}

processUserInput(greeting);

let promprom = new Promise((resolve, reject) => {
    let a = 10 + 10;
    if (a == 20) {
        // successful outcome
        resolve(`All went well!`);
    } else {
        // something went wrong
        reject(`It didn't work!`);
    }
});

// resolve = .then();
// reject = .catch();

promprom.then((message) => {
    console.log(`This is in the block, the status of the promise is ${message}`);
}).catch((message) => {
    console.log(`This is in the catch block, status is ${message}`);
}).then(() => {
    console.log(`I will take place regardless of what happened before!`);
});

let aNewPromise = new Promise((resolve, reject) => {
    console.log(`intial`);
    resolve();
    reject(); //unreachable
}).then(() => {
    throw new Error(`Something has failed`); // Throws error
    console.log(`Do this`); // unreachable code
}).then(() => {
    console.log(`Do this after whatever happened before`);
}).catch((message) => {
    console.log(`Catches ${message}`);
});

// aNewPromise();