
// beforeend ---> append
// afterbegin
const todoList = document.querySelector(".todo-list");

todoList.insertAdjacentHTML("beforeend","<li>Programming</li>");

todoList.insertAdjacentHTML("afterbegin" , "<li>Playing</li>");


todoList.insertAdjacentHTML("beforebegin" , "<li>Working</li>");