//arrow functions

const sing = ()=>{
    console.log("Happy birthday to you ");
}

sing();


const add = (a , b , c) => {
    return a + b + c;
}

let res = add(1,3,4);
console.log(res);

// odd or even
//input : 1 number
//output :true
//isEven

// const isEven  = (num)=>{
//     return num%2===0;
// }

const isEven  = num => num%2===0;

let num = 112;
if(isEven(num))
{
    console.log(`${num} is even`);
}
else
{
    console.log(`${num} is odd`);
}

//input :string
//output : firstCharacter

const getFirstChar = (string)=>{
    return string[0];
}
let string = "How are you";
console.log(getFirstChar(string));

//input : array , target(number)
//output : index of target is target is found

const getIndexOf = (arr , target)=>{
    for(let i in  arr)
    {
        if(arr[i]===target)
         return i;
    }
    return -1;
}

const arr = [1,2,3,4,5,6];
let target = 5;
console.log(getIndexOf(arr , target));

const sumN = n =>{
    let sum = 0;
    for(let i = 1; i<=n ; i++){
        sum+=i;
    }
    return sum;
}

console.log(sumN(20));

// =================================================
//Write a function to find factorial of number

//function declaration 
function fact(n){
    let pr = 1;
    for(let i = n; i>=2;i--){
        pr*=i;
    }
    return pr;
}
console.log(fact(5));

//function expression 
const fact1  = function(n){
    let pr = 1;
    for(let i = n; i>=2; i--){
        pr*=i;
    }
    return pr;
}
console.log(fact1(5));

//arrow function
const fact2 = n =>{
    let pr = 1;
    for(let i = n; i>=2;i--){
        pr*=i;
    }
    return pr;
}
console.log(fact2(5));
//-----------------------------------

//write a function to check whether number is prime number or not

function isPrime(num)
{
    for(let i = 2; i<=num/2;i++)
    {
        if(num%i===0)
        return false;
    }
    return true;
}

const isPrimeNumber  = function(num){
    for(let i = 2; i<= Math.sqrt(num) ; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const isPrimeNumber1 = (num)=>{
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num%2 === 0){
            return false;
        }
    }
    return true;
}


let n = 32;
if(isPrimeNumber1(n)){
    console.log(`${n} is prime number`);
}
else{
    console.log(`${n} is not prime number`);
}

//-------------------------------------------
// write a function to check whether it is positive or not

const isPositive = n => n>0;

if(isPositive(-10)){
    console.log("positive");
}
else{
    console.log("negative");
}