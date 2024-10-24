const todoForm = document.querySelector(".form-todo");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".todo-list")

console.log(todoInput.value);
todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); //to avoid making page refresh
    let myTodo = todoInput.value;

    const newLi = document.createElement("li");
    const newInnerHTML = `    
            <span class="text">${myTodo}</span>
            <div class="todo-buttons">
                <button type="button" class="todo-btn done"> Done</button>
                <button type="button" class="todo-btn remove"> Remove</button>
            </div>
    `
    newLi.innerHTML = newInnerHTML;

    todoList.append(newLi);
    console.log(newLi);

});

const done = document.querySelector(".done");

todoList.addEventListener("click" , (event)=>{
    console.log(event.target);

    // done
    if(event.target.classList.contains("done")){
        const liSpan = event.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";

    }
    if(event.target.classList.contains("remove")){
        const target = event.target.parentNode.parentNode;
        console.log(target);
        target.remove();
    }
});

