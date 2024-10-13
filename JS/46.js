// important array methods
//foreach 
const numbers = [1,2,4,5,2,5,7];


function getFirst(number , index){
       console.log("index is :" , index);
       console.log("Value is :" , number ,"* 2 = " , number*2);
}

for(let i = 0; i<numbers.length;i++)
{
    //  getFirst(numbers[i],i);

}
 
numbers.forEach((number,index)=>{
    console.log("index is :" , index);
    console.log("Value is :" , number ,"* 2 = " , number*2);
});

numbers.forEach((numbers)=>{
    console.log(numbers*2);
});

const users = [
    {firstName:"Harish" , age:22},
    {firstName:"Rakesh" , age:21},
    {firstName:"pratik" , age:19},
    {firstName:"Rohan" , age:24},
]

users.forEach(obj =>{
    console.log(obj);
});



