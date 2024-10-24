// event object

// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click" , function(event){
// //    console.log(this);
//    console.dir(event);
// });

//jab bhi main kisi bhi element pe event listener add hoga
//js Engine -- line by line execute krta hai
// browser --- js Engine  + extra features 
// browser --- js Engine  + webApi

// jab browser ko pata chala user ne event perform kia
// jo hum listen kar rahi the 
// browser --- 2
// 1. callback function hai vo js engine ko dega
// 2. callback function ke sath browser jo event huaa hai uski information bhi dega
// ye inforamtion hme object ke form mai milegi

const allButtons = document.querySelectorAll(".my-buttons button");

for (const button of allButtons) {
    button.addEventListener("click" , function(event){
        console.log(event.currentTarget);
        console.log(event.target);
        console.log("You clicked me" , this.textContent);
    })
}


