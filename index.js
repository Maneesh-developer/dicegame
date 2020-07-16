var player1 = prompt("Player 1 name?");
var player2 = prompt("Player 2 name?");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 " + player1 + " wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = player2 + " wins 🚩";
} else {
  document.querySelector("h1").textContent = "Draw";
}
