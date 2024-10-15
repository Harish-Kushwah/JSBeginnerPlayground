// prototype

function hello(){
    console.log("hellp world");
}

// javascript function ===> function + object

console.log(hello.name);

//you can add your onw properties
hello.newProp = "Very important";
console.log(hello.newProp);

// name property ---> tells function name
//function provide more usefull properties

// {} empty object provided by the function is known as prototype


console.log(hello.prototype);

//only functions provide prototype property

if(hello.prototype){
    console.log("Prototype is present");
}
else{
    console.log("Prototype is not present");
}

const obj = {};
if(obj.prototype){
    console.log("Prototype is present");
}
else{
    console.log("Prototype is not present");
}