// types of operator

// data types (primitive data types)
// string "harish"
// number 2,3,4,5
// booleans
// null
// BigInt
// Symbol

let age = 22;
let firstName = "Harish";

console.log("Age :" + typeof(age));
console.log("Name :" + typeof(firstName));

// convert number to string
//method one
let ageString = age +'';
console.log(typeof(ageString));
console.log(typeof ageString);

//method two
age = 18;
age = String(age)
console.log(age)


// convert string to number
let weight = "34";
console.log(typeof weight);
weight = +weight;
console.log(typeof weight)

let wt  = "80"
wt = Number(wt);
console.log(wt);