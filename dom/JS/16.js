class MyColor {

    constructor() {
        this.red = Math.floor(Math.random() * 1000) % 256;
        this.green = Math.floor(Math.random() * 1000) % 256;
        this.blue = Math.floor(Math.random() * 1000) % 256;
    }
    get newColor() {
        return `rgb(${this.red},${this.green},${this.blue})`;
    }
}

const one = document.querySelector("#one");
const h1 = document.querySelector(".heading h1");
const animation = document.querySelector("#two");

one.addEventListener("click", (event) => {
    let newColor = new MyColor().newColor;
    document.body.style.background = newColor;
    h1.textContent ="Current Color : "+ newColor;
});
let i =0;
animation.addEventListener("click" , (event)=>{

    // while(i<=10){
    //     let newColor = new MyColor().newColor;
    //     document.body.style.background = newColor;
    //     //  for(let j = 0 ;j<1000;j++){
    //     //     for(let k = 0 ;k<1000;k++){
    //     //         console.log(i,k);
    //     //     }
    //     //  }
    //    i++;
    //  }
    console.log("hello");
    

})

function myAnmation()
{
    let newColor = new MyColor().newColor;
    document.body.style.background = newColor;
}

// setInterval(myAnmation , 1000);

for(let i =0 ;i<10;i++){
  myAnmation();
  for(let j = 0; j<10000;j++){

  }
}












// const two = document.querySelector("#two");
// two.addEventListener("click", (event) => {
//     two.style.color = "grey";
//     document.body.style.background = "red";
// })

// const three = document.querySelector("#three");
// three.addEventListener("click", () => {
//     document.body.style.background = "blue";
// })


