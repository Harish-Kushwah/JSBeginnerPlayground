// compilation 
// code execution
// why compilation

// how javascript code execute


// what is global execution context ?

/* 
  code execution
   => global execution context
     -> creation phase
         window :{} --provided by the browser
         firstName :undefined
         this:window
     -> code execution phase
        
 
*/
// what is local execution context ?
// closure

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "harish";
console.log(firstName);



/*
71.js:33 Uncaught ReferenceError: Cannot access 'firstName1' before initialization
*/
/*
 let and const ki bhi hoisting hoti hai
*/
// console.log(firstName1);
let firstName1 = "harish";
console.log(firstName1);

//TDZ : Temporal Dead Zone



