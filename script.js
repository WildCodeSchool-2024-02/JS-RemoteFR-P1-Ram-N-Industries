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
const nombreVincent = document.querySelector("#nombreVincent");
const costVincent = document.querySelector("#costVincent");
const nombreChristopher = document.querySelector("#nombreChristopher");
const costChristopher = document.querySelector("#costChristopher");
const clickSound = document.querySelector("#clickSound");

let score = 0;
let bonusAnthoCost = 100;
let bonusAyoubCost = 15;
let bonusVincentCost = 1000;
let bonusChristopherCost = 1;
let antho = 1;
let ayoub = 1;
let vincent = 1;
let christopher = 1;
let ayoubCheck = false;
let christopherCheck = false;

const playSound = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};

const updateCounterClass = () => {
  if (score < bonusAnthoCost) {
    costAntho.classList.remove("available");
    costAntho.classList.add("unavailable");
    document.querySelector("#bonusAntho").classList.remove("zoom");
  } else {
    costAntho.classList.remove("unavailable");
    costAntho.classList.add("available");
    document.querySelector("#bonusAntho").classList.add("zoom");
  }

  if (score < bonusAyoubCost) {
    costAyoub.classList.remove("available");
    costAyoub.classList.add("unavailable");
    document.querySelector("#bonusAyoub").classList.remove("zoom");
  } else {
    costAyoub.classList.remove("unavailable");
    costAyoub.classList.add("available");
    document.querySelector("#bonusAyoub").classList.add("zoom");
  }
  if (score < bonusVincentCost) {
    costVincent.classList.remove("available");
    costVincent.classList.add("unavailable");
    document.querySelector("#bonusVincent").classList.remove("zoom");
  } else {
    costVincent.classList.remove("unavailable");
    costVincent.classList.add("available");
    document.querySelector("#bonusVincent").classList.add("zoom");
  }
  if (score < bonusChristopherCost) {
    costChristopher.classList.remove("available");
    costChristopher.classList.add("unavailable");
    document.querySelector("#bonusChristopher").classList.remove("zoom");
  } else {
    costChristopher.classList.remove("unavailable");
    costChristopher.classList.add("available");
    document.querySelector("#bonusChristopher").classList.add("zoom");
  }
};
const basicClick = () => {
  score++;
  counter.innerHTML = score;
  updateCounterClass();
  succesCheck();
  playSound();

  if (antho > 1) {
    score += antho * 2 - 1;
  }
  if (vincent > 1) {
    score += vincent * 5 - 1;
  }
};

clicking.addEventListener("click", basicClick);

const bonusAnthoPurchase = () => {
  if (score >= bonusAnthoCost) {
    score = score - bonusAnthoCost;
    antho = antho++;
    bonusAnthoCost = Math.round(bonusAnthoCost * 1.5);
    counter.innerHTML = score;
    costAntho.innerHTML = bonusAnthoCost;
    nombreAntho.innerHTML = antho++;
    updateCounterClass();
    succesCheck();
    if (antho > 1) {
      score += antho * 2 - 1;
    }
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

    succesCheck();
    if (ayoubCheck !== true) {
      ayoubCheck = true;
      setInterval(() => {
        updateCounterClass();
        score += ayoub - 1;
        counter.innerHTML = score;
      }, 1000);
    }
  }
};
const bonusVincentPurchase = () => {
  if (score >= bonusVincentCost) {
    score = score - bonusVincentCost;
    vincent = vincent++;
    bonusVincentCost = Math.round(bonusVincentCost * 1.5);
    counter.innerHTML = score;
    costVincent.innerHTML = bonusVincentCost;
    nombreVincent.innerHTML = vincent++;
    updateCounterClass();
    succesCheck();
    if (vincent > 1) {
      score += vincent * 5 - 1;
    }
  }
};
const bonusChristopherPurchase = () => {
  if (score >= bonusChristopherCost) {
    score = score - bonusChristopherCost;
    christopher = christopher++;
    bonusChristopherCost = Math.round(bonusChristopherCost * 1.5);
    counter.innerHTML = score;
    costChristopher.innerHTML = bonusChristopherCost;
    nombreChristopher.innerHTML = christopher++;
    updateCounterClass();
    succesCheck();
    if (christopherCheck !== true) {
      christopherCheck = true;
      clicking.src = "images/piratopher.png";
      document.querySelector("#scoreTitle").innerHTML = "Nombre de Christopher";
      document.querySelector("#logo").src = "images/ChristopherLogo.png";
    }
  }
};

const bonusAntho = document
  .querySelector("#bonusAntho")
  .addEventListener("click", bonusAnthoPurchase);
const bonusAyoub = document
  .querySelector("#bonusAyoub")
  .addEventListener("click", bonusAyoubPurchase);
const bonusVincent = document
  .querySelector("#bonusVincent")
  .addEventListener("click", bonusVincentPurchase);
const bonusChristopher = document
  .querySelector("#bonusChristopher")
  .addEventListener("click", bonusChristopherPurchase);

/* Drag prevent */
const noDrag = document.querySelector("body");

noDrag.addEventListener("dragstart", (event) => {
  event.preventDefault();
});

/* SUCCES */
const succesPizza = document.querySelector("#succesPizza");
const succesReunion = document.querySelector("#succesReunion");
const succesPoulpe = document.querySelector("#succesPoulpe");
const succesDino = document.querySelector("#succesDino");
const succesGoat = document.querySelector("#succesGoat");

const succesCheck = () => {
  if (score >= 10000) {
    succesPizza.classList.remove("lock");
    succesPizza.classList.add("unlock");
  }
  if (score >= 100000) {
    succesReunion.classList.remove("lock");
    succesReunion.classList.add("unlock");
  }
  if (score >= 1000000) {
    succesPoulpe.classList.remove("lock");
    succesPoulpe.classList.add("unlock");
  }
  if (score >= 10000000) {
    succesDino.classList.remove("lock");
    succesDino.classList.add("unlock");
  }
  if (score >= 100000000) {
    succesGoat.classList.remove("lock");
    succesGoat.classList.add("unlock");
  }
};

/* MENU BURGER */
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
