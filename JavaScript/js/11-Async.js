'use strict'

async function test() {
    return Promise.resolve("Hello there");
}
//wait until we get a response
// await keyboard - pauses te execution until the completion of the promise
// await ONLY works inside an ASYNC function


test().then((message) => {
    console.log(message)
});

async function test2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 3000);
    });

    let result = await promise; //pause until the promise is resolved
    console.log(result);
}

test2();

// DEMO of ASYNC and its awesomeness

async function async1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 1");
            resolve();
        }, 1000)
    });
}

async function async2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 2");
            resolve();
        }, 2000)
    });
}

async function async3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Function 3");
            resolve();
        }, 3000)
    });
}

async function doThings() {
    await async3();
    await async2();
    await async1();
    return "All Done";
}

doThings().then(console.log);



// session based - whilst the browser is alive
// local based - i will live here until you kick me out

const title = document.querySelector("#typehere");

window.onload = () => {
    let username = prompt("What's your username?");
    sessionStorage.setItem("username", username);
    let textNode = document.createTextNode(username);
    title.appendChild(textNode);

    let food = promp("what is your favourite food?");
    localStorage.setItem("Fave food", food);
    let p = document.createElement("p");
    let message = document.createTextNode(localStorage.getItem("Fave food"));
    p.appendChild(message);
    title.appendChild(p);
}