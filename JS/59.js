
"use strict"  
// console.log(this.alert("hello"));
console.log(window);

console.log(this === window);


function myFunc(){
    
    console.log(this);
}

myFunc();
this.myFunc();


function myFunction(){
    console.log("harish");
}
// call to call the function
myFunction.call();
function about(a,b){
    console.log(this.firtName , this.age,a,b);
}
const user1 ={
    firtName :"Harish",
    age:20,
    
}
const user2 ={
    firtName :"Pratik",
    age:20,
    
}

// user1.about(); //value of this will be user1
// user1.about.call(user2,1,2);  //to use the about method of user1 in user2 we pass the this as user2 in the call method
// user1.about.call(user1,3,4);

about.call(user2,1,2);  //to use the about method of user1 in user2 we pass the this as user2 in the call method

about.apply(user1 , [1,2]);

const func = about.bind(user1 , 100,300);
func();