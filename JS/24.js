//primitive vs reference type

let num1 = 6;
let num2 = num1;

// console.log("Value of num1 is :" + num1);
// console.log("Value of num2 is :" + num2);

// num1++;

// console.log("After incrementing num1 :");
// console.log("Value of num1 is :" + num1);
// console.log("Value of num2 is :" + num2);

//reference types

let arr1 = [1,2,3];
let arr2 = arr1;

console.log("arr1 : " , arr1);
console.log("arr2 : " , arr2);

arr1.push(10);

console.log("After adding element in arr1");

console.log("arr1:" , arr1);
console.log("arr2 :" , arr2);

