//find method

const myArray =["harish","cat","dog","lion"];

function isLength(string){
    return string.length === 3;
}

let res = myArray.find(isLength);
console.log(res);

let ans = myArray.find((string) => string.length === 4);
console.log(ans);

const userCart =[
    {id:1, item:"Oppo" , price:123},
    {id:2, item:"Smasung" , price:1234},
    {id:3, item:"Vivo" , price:12344},

]

let user = userCart.find( userCart => userCart.id==2 );

console.log(user);

