//
let car = new Object();
car["make"] = "Audi";
car["model"] = "A5";
car["carReg"] = "W8M8";

console.log(car) // shows all attributes
console.log(car.make); //show the value of make
console.log(car.model); //show the value of model
console.log(car.carReg); //show the value of carReg

//The object can have new properties added at any time.Known as an expando property.
car.numberOfDoors = 4;
console.log(car.numberOfDoors); //Shows the value referring to number of doors.

//a lot simpler and quicker to declare objects
let car = { make: "Audi", model: "A5", carReg: "W8M8" };

// literal notation to create complex arrays of objects
let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);

// loop through arrays of objects
for (let i = 0; i < carPark.length; i++) {
    for (let key in carPark[i]) {
        console.log(`${key} : ${carPark[i][key]}`);
    }
}

// create objects using enhanced object literals
let power = 200;
let myCar = {
    power
}

// defining methods
let power = 200
let myCar = {
    speed = 0,
    power,
    accelerate() { this.speed = this.power / 2 },
}
console.log(myCar.speed); // This line will return 0.
myCar.accelerate(); // Call this method  
console.log(myCar.speed); //The value of speed will now be 100

// dynamic property names
let power = 200;
n = 0;
let myCar = {
    power,
    ["prop_" + ++n]: n
};

// How to create arrays
let a = Array(); // an empty array called a
let b = Array(10); //array containing 10 empty spaces called b
let c = Array("Tom", "Dick", "Harry"); // array containing 3 elements called c
// short hand for creating arrays
let cShortHand = ["Tom", "Dick", "Harry"]; //shorthand using [] around each elment and seperated by a comma.
let d = [1, 2, 3, 4, 5];

// How to access arrays
let classRoom = ["", "", "", ""];
classRoom[0] = "John";
classRoom[3] = "Simran";

console.log(classRoom[0]); // will return John
console.log(classRoom[2]); // will return nothing
console.log(classRoom[3]); // will return Simran.

for (let i = 0; i < classRoom.length; i++) {
    console.log(classRoom[i]);
}


// Array object methods
let d = ["apple", "strawberries", "banana", "grapes", "pear"];

console.log(d); // ["apple", "strawberries", "banana", "grapes", "pear"]
console.log(d.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
console.log(d.reverse()); //["strawberries", "pear", "grapes", "banana", "apple"]
console.log(d.join()); //strawberries,pear,grapes,banana,apple

e = d.join("-");
console.log(e); // strawberries-pear-grapes-banana-apple

console.log(d.push("lemon"));
console.log(d); //["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
console.log(d.pop());
console.log(d); //["strawberries", "pear", "grapes", "banana", "apple"]

let myArray = [1, 2, 3, 4]; //declare an array
//create a temp variable called "eachElement"
//itterate though "myArray" starting at index 0
//finally log the value of "eachElement"
for (eachElement of myArray) {
    console.log(eachElement);
}

// JSON OBJECTS
let myJSONObject = {
    "searchResults": [{
            "productName": "Aniseed Syrup",
            "unitPrice": 10
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};

//The parse method takes a string and parses it into JavaScript objects
let obj = JSON.parse('{"name":"Adrian"}');
console.log(obj.name); //returns Adrian
//The stringify method takes JavaScript objects and returns a string
let str = JSON.stringify({ name: "John" });