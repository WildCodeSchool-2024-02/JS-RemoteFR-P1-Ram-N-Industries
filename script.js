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

let score = 1;
let bonusAnthoCost = 15;
let bonusAyoubCost = 100;
let antho = 1;
let ayoub = 1;

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
  counter.innerHTML = score++;
  updateCounterClass();
};

const bonus1 = () => {
  score = score + antho * 2;
  counter.innerHTML = score++;
  updateCounterClass();
};

const bonus2 = () => {
  setInterval(() => {
    score += ayoub;
  }, 1000);
  updateCounterClass();
};

const increment = () => {
  if (antho <= 1) {
    basicClick();
  } else if (antho > 1) {
    bonus1();
  }
  if (ayoub > 1) {
    bonus2();
  }
};

clicking.addEventListener("click", increment);

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
  }
};
const bonusAntho = document.querySelector("#bonusAntho");
const bonusAyoub = document.querySelector("#bonusAyoub");
bonusAntho.addEventListener("click", bonusAnthoPurchase);
bonusAyoub.addEventListener("click", bonusAyoubPurchase);

const noDrag = document.querySelector("body");

noDrag.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

window.addEventListener("click", () => {
  document.getElementById("song").play();
});