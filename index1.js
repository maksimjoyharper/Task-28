// Средний уровень
// Задание 1

let firstElement = document.getElementById("first");

let secondElement = document.getElementById("second");

secondElement.onmouseover = function (i) {
  secondElement.style.backgroundColor = "red";
};

secondElement.onmouseout = function (i) {
  secondElement.style.backgroundColor = "aqua";
};

// Задание 2

let fly = document.getElementById("imgFly");

fly.onmouseover = function (i) {
  fly.style.width = "300px";
  fly.style.height = "120px";
  fly.src = "./images/pens.jpg";
};

fly.onmouseout = function (i) {
  fly.style.width = "500px";
  fly.style.height = "300px";
  fly.src = "./images/aircrafts.jpg";
};

// Задание 3

let form = document.getElementById("form");
let info = document.getElementById("data");

form.addEventListener("submit", (element) => {
  element.preventDefault();

  let formData = new FormData(form);
  let login = formData.get("login");
  let password = formData.get("password");

  info.textContent = "Login:  " + login + ",    Password:  " + password;
});

// Задание 4

let textList = document.querySelectorAll("p");

textList.forEach((element) => {
  if (element.textContent.includes("aaa")) {
    element.textContent = "111";
  }
});
