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
      listItems.classList.add(
        "shadow-sm",
        "p-3",
        "bg-body",
        "rounded",
        "list-items"
      );
      let icon = document.createElement("a");
      icon.classList.add("icon");
      icon.innerText = "x";
      let text = document.createElement("p");
      text.classList.add("text");
      text.innerText = todoText.value;
      listItems.appendChild(text);
      listItems.appendChild(icon);
      list.appendChild(listItems);

      setLS();
    }

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
    listItems.classList.add(
      "shadow-sm",
      "p-3",
      "bg-body",
      "rounded",
      "list-items"
    );
    const icon = document.createElement("a");
    icon.classList.add("icon");
    icon.innerText = "x";
    const text = document.createElement("p");
    text.classList.add("text");
    text.innerText = arr;
    listItems.appendChild(text);
    listItems.appendChild(icon);
    list.appendChild(listItems);
  });
}

// reset form
function resetForm() {
  setTimeout(() => {
    form.reset();
  }, 100);
}

// delete todo

function deleteTD() {
  let list = document.getElementById("list");
  list.addEventListener("click", (e) => {
    if (e.target.className === "icon") {
      e.target.parentElement.remove();
      deleteTDLS(e.target.parentElement.innerText);
    }
  });
}

deleteTD();

// delete todo de LS

let text = todoText.value;
function deleteTDLS(text) {
  let todos, textDelete;

  // delete x todo
  textDelete = text.substring(0, text.length - 1);
  todos = getLS();

  todos.forEach((text, index) => {
    if (text === textDelete) {
      todos.splice(index, 1);
    }
  });

  localStorage.setItem("todo", JSON.stringify(todos));
}
