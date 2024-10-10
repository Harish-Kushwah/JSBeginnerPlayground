/**
 * Objects are reference type
 * arrays are good but not sufficient
 * for real world data
 * objects stores key value pairs
 * objects don't have index
 */

//how to create objects

const person = {
    name: "Harish",
    age: 20,
    hobbies :['Football','Programming','Reading','Watching Movies'],
};
console.log(person);

console.log(typeof person);
//how to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

console.log("Name is :" , person['name']);

for(let hobby of person.hobbies){
    console.log(hobby);
}

//how to add key value pair to objects

person.gender = 'Male';
// person['gender'] = 'Male';


console.log(person);
