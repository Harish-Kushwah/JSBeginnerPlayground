//DOM
// Document Object Model

// console.dir(document);
// select element by using element id
/*

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

*/
//query selector

/*
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);

const navItem  = document.querySelector(".nav-item");
console.log(navItem);

const allNavItem  = document.querySelectorAll(".nav-item");
console.log(allNavItem);

*/

//change text
// textContent gives the text 
/*
const mainHeading = document.getElementById("main-heading");

// mainHeading.textContent = "Modified form the javascript";
console.log(mainHeading.textContent);

console.log(mainHeading.innerText);
*/


// change the style of the elements
/*
const mainHeading = document.querySelector("div.headline h2");

mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "red";
mainHeading.style.border = "10px solid red";

console.log(mainHeading.style);
*/

// get and set attributes
/*
const link = document.querySelector("a");
console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.google.com");


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));
*/

// get multiple elements using getElements  by class name
// get multiple elements items using querySelectorAll
/*
const navItems = document.getElementsByClassName("nav-item"); //returns HTMLCollection
console.log(navItems);
console.log(navItems[0]);

const navItems1  = document.querySelectorAll(".nav-item"); //returns NodeList
console.log(navItems1); 
*/

// array like object : indexing , length property
/*
let navItems = document.getElementsByTagName("a"); //returns HTMLCollection
console.log(navItems);
console.log(navItems[0]);
for(let item of navItems){
    item.style.backgroundColor = "white";
    item.style.color = "green";
    item.style.fontWeight = "bold";
    item.style.padding ="3px";
    // console.log(item.style);

// }


navItems = Array.from(navItems);
navItems.forEach(item => {
    item.style.backgroundColor = "white";
    item.style.color = "green";
    item.style.fontWeight = "bold";
    item.style.padding ="3px";
});

*/

let navItems = document.querySelectorAll("a");
navItems.forEach(item => {
    item.style.backgroundColor = "white";
    item.style.color = "green";
    item.style.fontWeight = "bold";
    item.style.padding ="3px";
});


