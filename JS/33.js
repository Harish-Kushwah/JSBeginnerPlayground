// spread operator

const array = [1,2,3];
const array2 = [5,6,7];

const newArray = [...array,...array2,89  , ..."harish"];


console.log(newArray);

//spread operator in objects

const person = {
    name : "harish",
    age :20,
    gender:"Male",
    salary:111
};

const employee ={
    salary : 12345,
    
};

const newObject ={
    ...person,
    ...employee, //to add all the key value pairs of the object
    newKey:"this is value of new key"
};

const obj1 = {..."harish"}

console.log(obj1);


//object destructuring 
const band ={
    bandName : "smaple band",
    song :"jay shree ram",
    another:"hello"
};

// const bandName = band.name;
const {song:var1,bandName:var2 ,...restProps }  = band;


console.log(var2);

console.log(var1);

console.log(restProps);



