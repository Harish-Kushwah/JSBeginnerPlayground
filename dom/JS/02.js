//innerHTML

// const headLine = document.querySelector(".headline");

// let myHtml = "<h1> Hello update inner html</h1>";
// myHtml+= "<button type=\"submit\" class=\"btn btn-headline\" >Submit </button>"

// headLine.innerHTML = myHtml;
// console.log(headLine.innerHTML);


// const rootNode = document.getRootNode();


// const htmlElement = rootNode.childNodes[1];

// console.log(htmlElement);
// console.log(htmlElement.childNodes);
// console.log(htmlElement.childNodes[0]);
// console.log(htmlElement.childNodes[0].nextSibling);

// DOM traversing
// const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "red";

// const body = document.body;
// body.style.color = "green";
// console.log(body);

const head = document.querySelector("head");
const title = head.querySelector("title");

console.log(title);
console.log(title.childNodes);
console.log(head.children);