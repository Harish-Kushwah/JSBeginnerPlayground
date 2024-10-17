//function execution context
let foo = "foo";

console.log(foo);

function getFullName(fName , lName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = fName + " " + lName;
    return fullName;
}

const personName = getFullName("harish" ,"kushwah");
console.log(personName);  