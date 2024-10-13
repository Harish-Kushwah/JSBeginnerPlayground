// map method

const numbers = [1,2,3,4];

function fun(number){
    return number**2;
}

//returns the new array
const sqrArr = numbers.map(fun);

const cubes = numbers.map(num=>num**3);

console.log(sqrArr);

console.log(cubes);

const users = [
    {firstName:"Harish" , age:22},
    {firstName:"Rakesh" , age:21},
    {firstName:"pratik" , age:19},
    {firstName:"Rohan" , age:24},
]

const fName = users.map(users => users.firstName);

console.log(fName);