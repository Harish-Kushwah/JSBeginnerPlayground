//function declaration

function song()
{
    console.log("Happy birthday to you ");
}

song();
song();

// function sum(a , b)
// {
//     console.log(a+b);
// }
// sum(1,2);

function add(a , b , c) 
{
    return a + b + c;
}

let res = add(1,3,4);
console.log(res);

// odd or even
//input : 1 number
//output :true
//isEven

function isEven(num)
{
    return num%2===0;
}

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

function getFirstChar(string)
{
    return string[0];
}
let string = "How are you";
console.log(getFirstChar(string));

//input : array , target(number)
//output : index of target is target is found

function getIndexOf(arr , target)
{
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