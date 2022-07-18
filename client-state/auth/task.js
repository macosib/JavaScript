const form = document.querySelector("#signin__form");
const signin = document.querySelector("#signin");
const user = document.querySelector("#user_id");
const welcome = document.querySelector("#welcome");
const signout = document.querySelector("#signout");
const signoutButton = document.querySelector("#signout__btn");

function main() {
  const userId = localStorage.getItem("user_id");
  if (userId) {
    showResult();
    logoutButtonActDeact();
  }

  form.addEventListener("submit", auth);
  signoutButton.addEventListener("click", logout);
}

function logout() {
  logoutButtonActDeact();
  showResult();
}

function logoutButtonActDeact() {
  signout.classList.toggle("signin_active");
}

async function auth(e) {
  e.preventDefault();

  const baseUrl = "https://netology-slow-rest.herokuapp.com/auth.php";
  const options = {
    method: "POST",
    body: new FormData(form),
  };
  let response = await fetch(baseUrl, options);
  let result = await response.json();

  if (result["success"]) {
    localStorage.setItem("user_id", result["user_id"]);
    logoutButtonActDeact();
    showResult();
  } else {
    alert("Неверный логин/пароль");
  }
}

function showResult() {
  form.login.value = "";
  form.password.value = "";
  const userId = localStorage.getItem("user_id");
  user.textContent = userId;
  signin.classList.toggle("signin_active");
  welcome.classList.toggle("welcome_active");
}

main();
