const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");

function loginButtonClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", loginButtonClick);
