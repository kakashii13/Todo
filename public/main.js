const todoText = document.getElementById("todo-text");
const btn = document.getElementById("btn");
const box = document.getElementById("box");
const form = document.querySelector(".form");

document.addEventListener("DOMContentLoaded", () => {
  showLS();
});

// Crea el todo
function printTodo() {
  form.addEventListener("submit", (e) => {
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
    resetForm();
  });
}

printTodo();

// setea en LS
function setLS() {
  let arr;
  arr = getLS();

  arr.push(todoText.value);
  localStorage.setItem("todo", JSON.stringify(arr));
}
// Obtiene lo que hay en LS
function getLS() {
  let arr;
  if (localStorage.getItem("todo") === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("todo"));
  }
  return arr;
}

// imprime en pantalla lo que hay en LS
function showLS() {
  getLS().forEach((arr) => {
    box.style.overflowY = "scroll";
    const list = document.getElementById("list");
    const listItems = document.createElement("li");
    listItems.classList.add("list", "shadow-sm", "p-3", "bg-body", "rounded");
    listItems.innerText = arr;
    list.appendChild(listItems);
  });
}

// reset form
function resetForm() {
  setTimeout(() => {
    form.reset();
  }, 100);
}
