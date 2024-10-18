
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// step 1 :use open method
// console.log(xhr.readyState);  // init 

xhr.open("GET", url);

// console.log(xhr.readyState);

// xhr.onreadystatechange = function()
// {
//     if(this.readyState === 4){
//         console.log(xhr.status)
//         const response  = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// jab ready state is 4 hogi tabhi chalega
xhr.onload = function () {
    console.log(xhr);
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();