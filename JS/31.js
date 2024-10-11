//difference between dot and bracket notation

const key = "email";
const person = {
    name : "Harish",
    age  : 20,
    "person hobbies" : ['Playing ' , 'Programming']
}

console.log(person["person hobbies"]);

// console.log(person.person hobbies);can not access like this

person[key] = "harishkushwah54321@gmail.com";

console.log(person);

//how to iterate the object 

// for in loop

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}

//object.keys

console.log(Object.keys(person));

for(let key of Object.keys(person))
{
    console.log(key , ":" ,person[key]);
}


