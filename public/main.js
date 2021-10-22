const todoText = document.getElementById("todo-text");
const btn = document.getElementById("btn");
const box = document.getElementById("box");
let arr = [];

function printTodo() {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (todoText.value == "") {
      alert("campo vacio");
    } else {
      box.style.overflowY = "scroll";
      const list = document.getElementById("list");
      const listItems = document.createElement("li");
      listItems.classList.add("list", "shadow-sm", "p-3", "bg-body", "rounded");
      listItems.innerText = todoText.value;
      list.appendChild(listItems);
    }
    setLS();
  });
}

printTodo();

function setLS() {
  arr.push(todoText.value);
  localStorage.setItem("todo", JSON.stringify(arr));
}
