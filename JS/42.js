//default parameter

function add(a,b=0)
{
        return a + b;
}

const res = add(1);
console.log(res);

//rest parameters

function func(a,b,...c)
{
    console.log(`a is ${a} b is ${b} c is ${c}`);
}

func(1,2,3,6,7,8);

const addAll = (...numbers) =>{
    let sum =0;
    for(let number of numbers)
        sum+=number;
    return sum;
}

console.log(addAll(1,2,3,4,5,-5));