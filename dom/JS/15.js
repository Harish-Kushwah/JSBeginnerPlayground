
console.log("script started");
const allButtons = document.querySelectorAll(".my-buttons button");

for (const button of allButtons) {
    button.addEventListener("click" , function(event){
        let num = 0;
        for(let i =0 ;i<1000000000;i++){
            num+=i;
        }
        console.log("You clicked me" , this.textContent , num);
    })
}
let outerVariable = 0;
for(let i =0 ;i<10000000;i++){
    outerVariable+=i;
}
console.log("Value of outer variable " , outerVariable);
console.log("script ended");

