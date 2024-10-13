//function returning function

function myFunc(){

    function hello(){
        console.log("hello world");
    }

    return hello;
    // return {name:"harish" , age:20};
}

const ans = myFunc();

ans();
// console.log(ans());