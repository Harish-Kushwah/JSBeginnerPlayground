// document.createElement("")

//append 
// prepend
// remove

/*

const newTodoItem = document.createElement("li");

const newTodoItemText = document.createTextNode("studying")
newTodoItem.append(newTodoItemText);
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);  //insert at last
// todoList.prepend(newTodoItem);  //insert at last


//to remove the li
const todo1 = document.querySelector('.todo-list li');
todo1.remove();

*/
// console.log(todoList);
// console.log(newTodoItem);


//before
//after


const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Programming";
const todoList = document.querySelector(".todo-list");

todoList.before(newTodoItem); //to add after the <li>
todoList.after(newTodoItem); //to add after the <li>






