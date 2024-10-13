//filter method

const numbers = [1,2,4,3,10];

const isEven = num => !(num%2);

const evens = numbers.filter(isEven)

console.log(evens);


//reduce method

const sum = numbers.reduce((accumulator  , currentValue)=>{
    return accumulator+=currentValue;
});

const sub = numbers.reduce((accumulator , currentValue)=>(accumulator-=currentValue));

console.log(sum);

console.log(sub);

const userCart =[
    {id:1, item:"Oppo" , price:12344},
    {id:2, item:"Smasung" , price:12344},
    {id:3, item:"Vivo" , price:12344},

]

const totalPrice = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+=currentProduct.price;
},0);
console.log(totalPrice);