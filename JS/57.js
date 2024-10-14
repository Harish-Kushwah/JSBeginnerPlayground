//clone using Object.assign

const obj ={
    name : "harish",
    age  : 20
}

// const obj2 = {...obj};
// cloning
const obj2 = Object.assign({} , obj);

console.log(obj2);


//optional chaining

const user = {
    name : "harish",
    address :{house :'1234'}
}

console.log(user.name);
console.log(user.address?.house);