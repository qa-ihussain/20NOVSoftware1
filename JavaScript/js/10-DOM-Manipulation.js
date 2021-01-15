let MONKEY = document.querySelector("#cutie");
console.dir(MONKEY);
MONKEY.title = "Funee monkee";
MONKEY.alt = "This is the alt tag";
// use SetAttribute() where possible instead of directly making changes to size
MONKEY.setAttribute("width", "250px");
MONKEY.setAttribute("height", "550px");
MONKEY.className = "just to show";

const PUP = document.querySelector(".pup");

// query selector all - selects ALL matching cases
let allP = document.querySelectorAll("div p");
console.dir(allP);

for (let i = 0; i < allP.length; i++) {
    allP[i].style.backgroundColor = "#ff0000";
}