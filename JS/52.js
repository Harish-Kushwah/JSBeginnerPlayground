//some method

const numbers = [1,2,3,4];

// kay ek bhi number yesa hai jo ki even hai

let ans = numbers.some(num => num%2==0);
console.log(ans);

const userCart =[
    {id:1, item:"Oppo" , price:123},
    {id:2, item:"Smasung" , price:1234},
    {id:3, item:"Vivo" , price:12344},

]

let isPrice = userCart.some((product) => product.price <500);
console.log(isPrice);