const sectionTodo = document.querySelector(".todo-section");
console.log(sectionTodo);
console.log(sectionTodo.classList);

// to add the new class 
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");

console.log(sectionTodo.classList.contains("container"));

// if class present then remove 
// else add the class
sectionTodo.classList.toggle("bg-dark")   //not present then add 
sectionTodo.classList.toggle("bg-dark")   // now present then remove