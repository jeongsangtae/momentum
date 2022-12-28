const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

function paintToDo(saveToDoInput) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = saveToDoInput;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const saveToDoInput = toDoInput.value;
  toDoInput.value = "";
  paintToDo(saveToDoInput);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
