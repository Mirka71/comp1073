/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Scott";
myAge = 100;

/* if a value is not ever expected to change use const. If a value will change sometime use let cuz it will vary */
const myJob = "Professor";

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myAge = 105;
myName = "Craig";

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;    //number
let manufacturer = "Honda";  //string
let typeCar = "2005" + manufacturer;  
console.log(typeCar);

// Strings (use '' or "")

// let typeCar = '2005' + manufacturer;  Types of concatenation
// let typeCar = '2005 ${manufacturer}';


// Booleans
let iAmTired = true; // boolean

// Arrays
let myNameArray = ["Scott", "Janet", "Steve"]; //object...arrays are objects
let myArray = [2, 4, 6, 8];
let myMixedArray = ["Scott", 72, false, myNumArray]; // arrays are counted starting at 0

// Objects

let myDog = {
    name: "Rufus",
    breed: "Shiba",
    size: "Small",
    age: 7
}  

// STEP 5: Typing (JavaScript is a loosely-typed language)
console.log(typeof(myDog));
