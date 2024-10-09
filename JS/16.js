// and or operator

let firstName = "Harish";
let age = 10;

console.log("And condition  :");
if(firstName.startsWith("H") && age >=18)
{
    console.log("Your name starts with H :" , firstName);
}
else{
    console.log("Not a valid details found");
}


console.log("OR condition  :");
if(firstName.startsWith("H") || age >=18)
{
    console.log("Your name starts with H :" , firstName);
}
else{
    console.log("Not a valid details found");
}