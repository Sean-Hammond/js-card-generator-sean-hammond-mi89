import "bootstrap";
import "./style.css";

import "./assets/img/playing-card.png";

window.onload = function () {
  //write your code here
  flipNewCard();
  const randomButton = document.querySelector("#draw-button");
  randomButton.addEventListener("click", () => {
    flipNewCard();
  });
  colorCards(foundationsPiles);
  colorCards(tableauPiles);
};

let currentRandomValue = "A";
let currentRandomSuit = "♠";

const foundationsPiles = [
  { value: "A", suit: "♦", color: "red" },
  { value: "A", suit: "♥", color: "red" },
  { value: "A", suit: "♠", color: "black" },
  { value: "A", suit: "♣", color: "black" },
  "foundations",
];

const tableauPiles = [
  { value: "K", suit: "♦", color: "red" },
  { value: "Q", suit: "♥", color: "red" },
  { value: "J", suit: "♠", color: "black" },
  { value: "10", suit: "♣", color: "black" },
  { value: "9", suit: "♦", color: "red" },
  { value: "9", suit: "♦", color: "red" },
  "tableau",
];

for (let i = 0; i < tableauPiles.length - 1; i++) {
  generateNewCard();
  tableauPiles[i].value = currentRandomValue;
  tableauPiles[i].suit = currentRandomSuit.suit;
}

function colorCards(pileType, index) {
  let indexStart = index;
  let indexEnd = index;
  if (index === undefined) {
    indexStart = 0;
    indexEnd = pileType.length - 1;
  }
  const ulPileType = document.querySelector(
    "#" + pileType[pileType.length - 1],
  );
  const liPileValues = ulPileType.querySelectorAll(".card-pile-value");
  const liPileSuits = ulPileType.querySelectorAll(".card-pile-suit");

  for (let i = indexStart; i < indexEnd; i++) {
    liPileValues[i].textContent = pileType[i].value;
    liPileSuits[i].textContent = pileType[i].suit;
    liPileValues[i].style.color = pileType[i].color;
    liPileSuits[i].style.color = pileType[i].color;
  }
  return;
}

function flipNewCard() {
  generateNewCard();

  const HTMLSuits = document.querySelectorAll(".suit");
  for (let suit of HTMLSuits) {
    suit.textContent = currentRandomSuit.suit;
    suit.style.color = currentRandomSuit.color;
  }
  const HTMLValue = document.querySelector(".card-value");
  console.log(HTMLValue);
  HTMLValue.textContent = currentRandomValue;
  HTMLValue.style.color = currentRandomSuit.color;
  return;
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

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
  const chosenValue = values[getRandomIndex(values)];
  const chosenSuit = suits[getRandomIndex(suits)]; // object with suit and color

  currentRandomValue = chosenValue;
  currentRandomSuit = chosenSuit; // object with suit and color

  // const HTMLSuits = document.querySelectorAll(".suit");
  // for (let suit of HTMLSuits) {
  //   suit.textContent = chosenSuit.suit;
  //   suit.style.color = chosenSuit.color;
  // }
  // const HTMLValue = document.querySelector(".card-value");
  // console.log(HTMLValue);
  // HTMLValue.textContent = chosenValue;
  // HTMLValue.style.color = chosenSuit.color;
  return;
}
