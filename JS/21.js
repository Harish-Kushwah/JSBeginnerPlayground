//for loop

for(let i = 0 ;i<=10;i++)
{
    console.log(i);
}

// console.log("Value of var :" + i);

let total = 0;
let num = 10;
for(let i = 1;i<=num;i++)
{
    total+=i;
}
console.log(`Sum of first ${num} is ${total}`);

//break 

for(let i = 1; i<=10;i++)
{
    if(i===5){
        break;
    }
    else{
        console.log(0);
    }
}

//continue
for(let i = 1; i<=10;i++)
{
    if(i===5){
        continue;
    }
    else{
        console.log(0);
    }
}