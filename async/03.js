// callback ,callback hell ,pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
// let change = false;
// setTimeout(()=>{
//     if(change){
//      heading1.textContent = "hello world";
//     change = false;
//     }
//     else{
//         heading1.textContent = "hello";
//         change = true;
//     }
//     console.log("hh");
//     console.log(heading1.textContent);

// } , 1000);

const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//      heading1.textContent = "hello world";
//      heading1.style.color = "green";

//      setTimeout(()=>{
//         heading2.textContent = "hello world";
//         heading2 .style.color = "green";
   

//     } , 1000);
// } , 1000);

function changeText(element , text , color , time , onSuccessCallback , onFailureCallBack)
{
    setTimeout(()=>{

        if(element){
        element.textContent = text;
        element.style.color = color;

        if(onSuccessCallback){
            onSuccessCallback();
        }
        }
        else{
            if(onFailureCallBack){
                onFailureCallBack();
            }
        }
    },time);
}

changeText(heading1 ,"hii" , "red" , 1000 ,
   ()=>{changeText(heading2 , "another text" ,"green", 1000 ,
         ()=>{console.log("hello");}) },
         
   ()=>{ console.log("heading1 does not exists");}

   );