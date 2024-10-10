// for loop in array

let fruits = ['Apple','Banana','Mango'];


let fruitsUpper = [];
for(let i = 0 ; i < fruits.length;i++)
{
    fruitsUpper.push(fruits[i].toUpperCase());
}

console.log(fruitsUpper);


for (const key in fruits) {
    console.log(fruits[key]);
}

//while loop 

let i = 0;
while(i<fruits.length)
{
    console.log(fruits[i]);
    i++;
}