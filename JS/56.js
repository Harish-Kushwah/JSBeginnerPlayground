/**
 * Map 
 * map is iterable
 * 
 * store data in ordered pair
 * 
 * objects can only have string or symbol as key
 * 
 * in maps tou can use anything as key like array ,number,string
 */

//object literal 
//key -> string
//key ->symbol

const person ={
    name:'harish',
    age :10,
    1:'one',
}

console.log(person);

const user = new Map();
user.set('name','Harish');
user.set('age',20);
user.set(1,'one');

console.log(user.get('name'));


console.log(user);

for(let key of user.keys()){
    console.log(key);
}

for(let [key,value] of user){
    console.log(key ,value);
}

const info =[
    ['name' , 'harish'],
    ['age' , 20]
]

const myInfo  = new Map(info);

console.log(myInfo);
