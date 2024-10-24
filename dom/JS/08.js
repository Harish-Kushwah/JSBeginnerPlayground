// some old methods to support poor IE

// appendChild;
// insertBefore;
// replaceChild;
// removeChild;

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "for IE";

ul.appendChild(li);
const first = ul.querySelector("li");
// console.log(first);
// ul.insertBefore(li,first);

// ul.replaceChild(li,first);

ul.removeChild(first);

