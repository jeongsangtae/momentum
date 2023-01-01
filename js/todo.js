const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

// toDos array
let toDos = [];

// toDos array 내용을 localstorage에 넣어준다. 문자열(string 방식으로)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// button을 click했을 때 실행되는 함수로, 클릭한 li를 제거한다.
// 여기서 toDos DB의 id는 숫자, li.id는 문자열 방식으로 되어있기 때문에 li.id를 parseInt()함수를 사용해 숫자열로 바꿔 toDo의 id와 li의 id가 다른 정보는 확인해 남긴다.
// 그리고 다시 saveToDos를 불러 localStorage에 그 정보를 저장한다.
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// HTML에 li, span, button 을 만들어주고 span, button 을 화면에 보여준다.
// button을 click했을 때만 deleteToDo함수를 실행
// 아직 document에 존재하지 않는(JS에만 존재) li안에 들어있는 span, button들을 html ul에 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// submit이 되면, toDoInput의 값을 비우고, saveTodoObject에 입력 값을 text, 현재 날짜를 id로 저장 후
// toDos array안에 푸시해주고, 화면에 보여주는 paintToDo에 입력 값을 보낸다.
// toDo들을 저장
function handleToDoSubmit(event) {
  event.preventDefault();
  const saveToDoInput = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: saveToDoInput,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}

// todoForm이 submit 될 때만 handleToDoSubmit함수를 실행
toDoForm.addEventListener("submit", handleToDoSubmit);

// 앱이 시작되면 localstorage에서 savedToDos을 얻으려고 할텐데 거기서 todos라는 key를 가지고 찾게 된다
const savedToDos = localStorage.getItem(TODOS_KEY);

// localstorage에 들어있는 정보가 null값이 아니면 들어있는 정보를 문자열 방식에서 JSON 방식으로 바꿔준다.
// 그걸 다시 toDos array에 저장해준 다음
// forEach가 array 각 정보에 대해 function을 실행하게 해준다.
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
