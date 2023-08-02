// Лёгкий уровень
// Задание 1

let button = document.getElementById("btn");

let welcome = document.getElementById("par");

button.addEventListener("click", () => {
  welcome.textContent = "Привет, мир!";
});

// Задание 2

let greenSquare = document.getElementById("block");

let yellowSquare = document.getElementsByClassName("time");
for (let i = 0; i < yellowSquare.length; i++) {
  yellowSquare[i].style.background = "black";
}

let blueSquare = document.querySelector("#num");
console.log(yellowSquare, blueSquare);

let allSquare = document.querySelectorAll(".task2 > div");

let redSquare = document.getElementById("str");

greenSquare.style.background = "#B8B8B8";

blueSquare.style.background = "#5CE4CF";

redSquare.style.background = "green";

allSquare.forEach(function (element) {
  element.style.color = "red";
  element.classList.add("new");
});
