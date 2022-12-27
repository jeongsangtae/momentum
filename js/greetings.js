const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 화면 새로고침 방지
  event.preventDefault();
  // form을 다시 숨겨준다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // input value를 typedUsername이라는 key값으로 저장시켜준다
  const typedUsername = loginInput.value;
  // typedUsername값을 typedUsername이라는 key와 함께 local storeage에 저장한다
  localStorage.setItem(USERNAME_KEY, typedUsername);
  // onLoginSubmit함수에서는 유저정보가 input으로부터 오고 있다
  paintGreetings(typedUsername);
}

// 비어있는 h1 요소안에 `Hello 유저명` 이라는 텍스트 추가
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 앱이 시작되면 local storage에서 savedUsername을 얻으려고 할텐데 거기서 username이라는 key를 가지고 찾게 된다
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 처음에는 key랑 value가 null이므로
if (savedUsername === null) {
  // form에 hidden을 지워주고 form을 보여준다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // form이 submit될때만 onLoginSubmit함수를 실행 시키도록 한다
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 유저정보가 localstoreage에서 나오고 있다
  // paintGreeting은 only localstoarage에서만 값을 불러온다
  // show the greetings
  paintGreetings(savedUsername);
}
