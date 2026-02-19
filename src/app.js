import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  generateNewCard();
  const randomButton = document.querySelector("#draw-button");
  randomButton.addEventListener("click", () => {
    generateNewCard();
  });
};

function generateNewCard() {
  const suits = [
    { suit: "♦", color: "red" },
    { suit: "♥", color: "red" },
    { suit: "♠", color: "black" },
    { suit: "♣", color: "black" },
  ];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const chosenSuit = suits[getRandomIndex(suits)];
  const chosenValue = values[getRandomIndex(values)];
  
  const HTMLSuits = document.querySelectorAll(".suit");
  for (let suit of HTMLSuits) {
    suit.textContent = chosenSuit.suit;
    suit.style.color = chosenSuit.color;
  }
  const HTMLValue = document.querySelector(".card-value");
  console.log(HTMLValue);
  HTMLValue.textContent = chosenValue;
  HTMLValue.style.color = chosenSuit.color;
  return;
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
