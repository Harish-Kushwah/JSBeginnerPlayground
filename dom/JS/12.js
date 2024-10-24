// this keyword 

const btn = document.querySelector(".btn-headline");

// value of this in this case is button
// btn.addEventListener("click" , function(){
//     console.log("hello world");
//     console.log("value of this : ");
//     console.log(this);
// });


btn.addEventListener("click" , ()=>{
    console.log("hello world");
    console.log("value of this : ");
    console.log(this);
});