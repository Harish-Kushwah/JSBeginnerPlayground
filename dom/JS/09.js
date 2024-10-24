// static list vs live list

/*
   querySelector hame static list degi
   getElementBy[id,class] hame live list degi
*/
const listItems = document.querySelectorAll(".todo-list li");

const listItems1 = document.getElementsByClassName("li");

const newLi = document.createElement("li");

newLi.textContent = "Todo3";

const ul = document.querySelector(".todo-list");

ul.append(newLi);

console.log(listItems);





/*
   querySelector hame static list degi
   getElementBy[id,class] hame live list degi
*/
/*
const listItems = document.querySelector(".todo-list");

const listItems1 = listItems.getElementsByTagName("li");

const newLi = document.createElement("li");
newLi.textContent = "Todo3";

// const ul = document.querySelector(".todo-list");

listItems.append(newLi);

console.log(listItems1);

*/