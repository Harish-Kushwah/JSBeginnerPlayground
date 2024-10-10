//for of loop

const fruits = ['Apple','Mango','Banana'];


console.log("Array values prints using for loop");
//for loop
for(let i = 0 ;i < fruits.length ; i++)
{
    console.log(fruits[i]);
}


console.log("Array values prints using for of loop");

//for of loop returns the items from the array
for(let fruit of fruits){
    console.log(fruit);
}

console.log("Array values prints using for in loop");

//for in loop returns the index 
for(let index in fruits)
{
    console.log(fruits[index]);
}