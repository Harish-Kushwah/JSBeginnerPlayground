//arrays
//ordered collection of items
//reference type 
//all the reference types are object
//therefor array is a object

let fruits = ['Apple' , 'Orange','Guava'];

console.log(fruits);

console.log("0th fruit :" + fruits[0]);
console.log("1st fruit :" + fruits[1]);

let numbers = [1,2,3,4,5];
console.log(numbers);

let mixed = ['apple',1,23.4];

console.log(mixed);

fruits[0] = 'Pineapple';

console.log(fruits);

console.log(typeof fruits);

console.log(Array.isArray(fruits));


let obj = {};   //object literal

console.log(Array.isArray(obj));

fruits.push("Another new fruit");

//arrays are mutable

console.log(fruits);
let popFruit = fruits.pop();
console.log(popFruit);


//unshift to at at starting

fruits.unshift("mango");
console.log(fruits);

//shift - remove from the starting
fruits.shift();
fruits.shift();
console.log(fruits);