// every method

const numbers = [2,4,6];

let res = numbers.every((numbers)=> numbers%2==0)
console.log(res);

const userCart =[
    {id:1, item:"Oppo" , price:123},
    {id:2, item:"Smasung" , price:1234},
    {id:3, item:"Vivo" , price:12344},

]

let isValidPrice = userCart.every( product => product.price >100 );

console.log(isValidPrice);
