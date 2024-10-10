
//how to clone array 
let array1 = [1,2,3,4];
// let array2 = [1,2,3,4];

// let array2 = array1.slice(0);  //clone the array

// let array2 = [].concat(array1);

//new way
//spread operator :-  ...
// let array2 =[...array1];

// let array2 = array1.slice(0).concat(['i1' , 'i2']);

let array3 = ['i1','i2'];
// let array2 = [...array1 , 'i1','i2'];
let array2 = [...array1 ,...array3];

console.log(array1 === array2);

console.log(array1);
console.log(array2);


