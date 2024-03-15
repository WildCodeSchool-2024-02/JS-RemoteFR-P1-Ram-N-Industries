function togglePopupRules() {
  let popup = document.querySelector("#popup-overlay-rules");
  popup.classList.toggle("open");
}

function togglePopupSucces() {
  let popup = document.querySelector("#popup-overlay-succes");
  popup.classList.toggle("open");
}

function togglePopupTeam() {
  let popup = document.querySelector("#popup-overlay-team");
  popup.classList.toggle("open");
}

function togglePopupOption() {
  let popup = document.querySelector("#popup-overlay-option");
  popup.classList.toggle("open");
}

const clicking = document.querySelector("#clicking");
const counter = document.querySelector("#counter");
const costAntho = document.querySelector("#costAntho");
const costAyoub = document.querySelector("#costAyoub");
const nombreAntho = document.querySelector("#nombreAntho");
const nombreAyoub = document.querySelector("#nombreAyoub");

let score = 0;
let bonusAnthoCost = 15;
let bonusAyoubCost = 100;
let antho = 1;
let ayoub = 1;
let ayoubCheck = false;

const updateCounterClass = () => {
  if (score < bonusAnthoCost) {
    costAntho.classList.remove("available");
    costAntho.classList.add("unavailable");
  } else {
    costAntho.classList.remove("unavailable");
    costAntho.classList.add("available");
  }

  if (score < bonusAyoubCost) {
    costAyoub.classList.remove("available");
    costAyoub.classList.add("unavailable");
  } else {
    costAyoub.classList.remove("unavailable");
    costAyoub.classList.add("available");
  }
};
const basicClick = () => {
  score++;
  counter.innerHTML = score;
  updateCounterClass();
  if (antho > 1) {
    score += antho * 2;
  }
};

clicking.addEventListener("click", basicClick);

const bonusAnthoPurchase = () => {
  if (score >= bonusAnthoCost) {
    score = score - bonusAnthoCost;
    antho = antho++;
    bonusAnthoCost = Math.round(bonusAnthoCost * 1.15);
    counter.innerHTML = score;
    costAntho.innerHTML = bonusAnthoCost;
    nombreAntho.innerHTML = antho++;
    updateCounterClass();
  }
};
const bonusAyoubPurchase = () => {
  if (score >= bonusAyoubCost) {
    score = score - bonusAyoubCost;
    ayoub = ayoub++;
    bonusAyoubCost = Math.round(bonusAyoubCost * 1.15);
    counter.innerHTML = score;
    costAyoub.innerHTML = bonusAyoubCost;
    nombreAyoub.innerHTML = ayoub++;
    updateCounterClass();
    if (ayoubCheck !== true) {
      ayoubCheck = true;
      setInterval(() => {
        score += ayoub - 1;
        counter.innerHTML = score;
      }, 1000);
    }
  }
};
const bonusAntho = document.querySelector("#bonusAntho");
const bonusAyoub = document.querySelector("#bonusAyoub");
bonusAntho.addEventListener("click", bonusAnthoPurchase);
bonusAyoub.addEventListener("click", bonusAyoubPurchase);

/* Drag prevent */
const noDrag = document.querySelector("body");

noDrag.addEventListener("dragstart", (event) => {
  event.preventDefault();
});
