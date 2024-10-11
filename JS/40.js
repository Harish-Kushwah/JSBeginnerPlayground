//lexical scope

const app =()=>{
    const var1 = 10;

    function myFunc(){
        const var1 = "value10";
        console.log("Inside the myFunc :" , var1);
    };

    const myfunc2 = function(){
        const var1 = "value20";
        console.log("Inside the myFunc2 :" , var1);
    };


    const myFunc3 = ()=>{};

    console.log("Inside the app :" , var1);
    
    myFunc();
    myfunc2();

    console.log("Inside the app :" , var1);

}

app();