//how to get dimensions pf element

const sectionTodo =  document.querySelector(".todo-section");

const info = sectionTodo.getBoundingClientRect();
console.log(info);
console.log(info.width);
console.log(info.toJSON());