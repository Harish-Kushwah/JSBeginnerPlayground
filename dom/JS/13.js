/*
function setHeading(message){
    const heading =  document.querySelector('.heading');
    const h1 = document.createElement("h1");
    h1.textContent = message;

    heading.append(h1);
}


const firstButton = document.querySelector("#one");
const secondButton = document.querySelector("#two");
const thirdButton = document.querySelector("#three");

firstButton.addEventListener("click" , ()=>{
    setHeading("first button clicked");
    console.log("first button clicked");
});

secondButton.addEventListener("click" , ()=>{
    setHeading("second button clicked");
    console.log("second button clicked");
});


thirdButton.addEventListener("click" , ()=>{
    setHeading("third button clicked");
    console.log("third button clicked");
});
*/

const allButtons = document.querySelectorAll(".my-buttons button");

// for (const button of allButtons) {
//     button.addEventListener("click" , function(){
//         console.log("You clicked me" , this.textContent);
//     })
// }

allButtons.forEach(function(button){
   button.addEventListener("click" , function(){
    console.log("You clicked me" , this.textContent);
   })
})
console.log(allButtons);