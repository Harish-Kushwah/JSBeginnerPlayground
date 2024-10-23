// understand callback

function myFunction1(callback)
{
    console.log("function doing some task 1");

    callback();
}

function myFunction2()
{
    console.log("Function is doing task 2");

}

myFunction1(myFunction2);
// myFunction2();