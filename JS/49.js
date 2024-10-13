//sort method
//sort will mutate the array 

const numbers = [2,4,1200,3,1,5,6];

numbers.sort();  //this will sort the array by considering them as string 
numbers.sort((a,b)=>a-b); 
console.log(numbers);

const userNames = ['Harish','Rakesh','Pratik','Rohan','rakesh','ABC'];

userNames.sort();
console.log(userNames);


// price low to high
// price high to low

const userCart =[
    {id:1, item:"Oppo" , price:123},
    {id:2, item:"Smasung" , price:1234},
    {id:3, item:"Vivo" , price:12344},

]

const lowToHigh = userCart.slice(0).sort((a,b)=>{
     return a.price - b.price;
     return b.price - a.price ;
});
const HighToLow = userCart.slice(0).sort((a,b)=>{
     return b.price - a.price ;
});


for(let product of lowToHigh){
    console.log(product);
}
for(let product of HighToLow){
    console.log(product);
}