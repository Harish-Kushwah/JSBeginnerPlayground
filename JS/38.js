//hoisting
/**
 * we can only call the function before the function declaration
 * we can do such kind of calling in function declaration case
 * this behavior is called hoisting
 */

hello();

function hello()
{
    console.log("hello");
}

console.log(var1);  //output is undefined
var var1 = "hello variable";
console.log(var1);  

//in let and const case we get error


