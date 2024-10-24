// intro to events
// click
// button press
// hover
// mouse 

// event add krene ke 3 tarike hai

//1. onlick =" " in the html file

// 2. way
/*
const btn = document.querySelector(".btn-headline");
console.dir(btn);

btn.onclick = function(){
    console.log("you clicked me");
}
*/

//3. way

// method -- addEventListener()

const btn = document.querySelector(".btn-headline");
console.dir(btn);

btn.addEventListener("click" , ()=>{
    console.log("hello world");
});
