//callback function



function myFunc2()
{
    console.log("inside my func 2");
}

function myFunc(a)
{
    console.log("i am inside the myFunc");
    a();  //callback function
}

// myFunc([1,2,4]);

// myFunc("harish");

// myFunc({name:"harish"});

myFunc(myFunc2); //pass the function as argument