"use strict";
let SecretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-number").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".guessing").textContent = "⛔ No number";
  } else if (SecretNumber === guess) {
    document.querySelector(".guess-number").textContent = SecretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess-number").style.width = "30rem";
    document.querySelector(".guessing").textContent = "🎉 Correct Number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = highscore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector(".guessing").textContent = "📈Too High";
      score--;
      document.querySelector(".score-point").textContent = score;
    } else {
      document.querySelector(".guessing").textContent = "💥 You lost this game";
      document.querySelector(".score-point").textContent = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector(".guessing").textContent = "📉Too Low";
      score--;
      document.querySelector(".score-point").textContent = score;
    } else {
      document.querySelector(".guessing").textContent = "💥 You lost this game";
      document.querySelector(".score-point").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".guessing").textContent = "Start guessing...";
  document.querySelector(".score-point").textContent = score;
  document.querySelector(".guess-number").textContent = "?";
  document.querySelector(".input-number").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess-number").style.width = "15rem";
});
