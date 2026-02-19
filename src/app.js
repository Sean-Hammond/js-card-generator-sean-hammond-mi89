import "bootstrap";
import "./style.css";

import "./assets/img/playing-card.png";

window.onload = function () {
  //write your code here
  generateNewCard();
  const randomButton = document.querySelector("#draw-button");
  randomButton.addEventListener("click", () => {
    generateNewCard();
  });
  colorCards(foundationsPiles);
  colorCards(tableauPiles);
};

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

function flipNewCard(suitFlipped, valueFlipped) {
  const HTMLSuits = document.querySelectorAll(".suit");
  for (let suit of HTMLSuits) {
    suit.textContent = suitFlipped.suit;
    suit.style.color = valueFlipped.color;
  }
  const HTMLValue = document.querySelector(".card-value");
  console.log(HTMLValue);
  HTMLValue.textContent = valueFlipped;
  HTMLValue.style.color = suitFlipped.color;
  return;
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
  const chosenSuit = suits[getRandomIndex(suits)];
  const chosenValue = values[getRandomIndex(values)];

  flipNewCard(chosenSuit, chosenValue);

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

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
