// trim() --> to remove all the spaces 
// toUpperCase()
// toLoweCase()
// slice

let firstName = "  Harish   ";


console.log("Length :" + firstName.length);
console.log("After removing all space :" + firstName.trim())  ;
//string is immutable , trim function returns the new string
console.log("Length :" + firstName.length) ;

firstName = firstName.trim();
console.log("Length :" + firstName.length) ;

// converting the string toUpperCase
firstName = firstName.toUpperCase();
console.log("Upper case :" +  firstName);

firstName = firstName.toLowerCase();
console.log("Lower case :" + firstName);

//slice 
let newString = firstName.slice(2,4);  //slice(start,end)  --> end is not inclusive
console.log("New string :" + newString);

console.log("SubString :" + firstName.slice(1));

