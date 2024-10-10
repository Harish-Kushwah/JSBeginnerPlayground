//array destructuring

const fruits  = ['Apple','Banana','Mango','Lemon'];

let a = fruits[0];
let b = fruits[1];

console.log("Value of a ", a);
console.log("Value of b ", b);


let [a1,b1]= fruits;
console.log("Value of a1 ", a1);
console.log("Value of b1 ", b1);


let [a2,b2,...newArr]= fruits;
console.log("Value of a1 ", a2);
console.log("Value of b1 ", b2);
console.log("Value of newArr", newArr);