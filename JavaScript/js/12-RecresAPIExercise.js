const getPosts = document.querySelector('#getPosts');
const people = document.querySelector('#people');


const retrieveData = () => {
        fetch("https://reqres.in/api/users")
            .then((response) => {
                console.log(response);
                if (response.status !== 200) {
                    console.error('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                } else {
                    response.json().then(json => {
                        console.log(json);
                        console.log(json.data);
                        for (let i = 0; i < json.data.length; i++) {
                            let p = document.createElement("p");
                            p.setAttribute("class", "customer");
                            let info = document.createTextNode(json.data[i].first_name);
                            p.appendChild(info);
                            peeps.appendChild(p);
                        }
                    })
                }
            })
            .catch(err => console.error(`Stop! ${err}`));
    }
    // const registerSuccessful = () => {
    //     fetch('http://jsonplaceholder.typicode.com/posts/1/comments', {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 email: "a@mail.com",
    //                 password: "pword"
    //             }),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //         .catch(err => console.error(`Something went wrong`, err));
    // }

// const updateFunction = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts/1/comments', {
//             method: "POST",
//             body: JSON.stringify({
//                 email: "a@mail.com",
//                 password: "pword"
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(response => response.json())
//         .then(json => console.log(json))
//         .catch(err => console.error(`Something went wrong`, err));
// }