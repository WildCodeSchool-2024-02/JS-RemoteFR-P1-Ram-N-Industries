//POPUPS//

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

///////////////// POPUPS BURGER ////////////

function togglePopupRulesBurger() {
  let popup = document.querySelector("#popup-overlay-rules-burger");
  popup.classList.toggle("open");
}

function togglePopupSuccesBurger() {
  let popup = document.querySelector("#popup-overlay-succes-burger");
  popup.classList.toggle("open");
}

function togglePopupTeamBurger() {
  let popup = document.querySelector("#popup-overlay-team-burger");
  popup.classList.toggle("open");
}

function togglePopupOptionBurger() {
  let popup = document.querySelector("#popup-overlay-option-burger");
  popup.classList.toggle("open");
}

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

//CLICKER//
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

const costSamuel = document.querySelector("#costSamuel");
const nombreSamuel = document.querySelector("#nombreSamuel");

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

let bonusSamuelCost = 10;
let samuel = 1;

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
  if (score < bonusSamuelCost) {
    costSamuel.classList.remove("available");
    costSamuel.classList.add("unavailable");
    document.querySelector("#bonusSamuel").classList.remove("zoom");
  } else {
    costSamuel.classList.remove("unavailable");
    costSamuel.classList.add("available");
    document.querySelector("#bonusSamuel").classList.add("zoom");
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
  if (samuel > 1) {
    score += samuel * 100 - 1;
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
const bonusSamuelPurchase = () => {
  if (score >= bonusSamuelCost) {
    score = score - bonusSamuelCost;
    samuel = samuel++;
    bonusSamuelCost = Math.round(bonusSamuelCost * 1.5);
    counter.innerHTML = score;
    costSamuel.innerHTML = bonusSamuelCost;
    nombreSamuel.innerHTML = samuel++;
    updateCounterClass();
    succesCheck();
    if (samuel > 1) {
      score += samuel * 100 - 1;
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
const bonusSamuel = document
  .querySelector("#bonusSamuel")
  .addEventListener("click", bonusSamuelPurchase);

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
// SOUND SLIDE
const slideSound = document.getElementById("volumeSound");
slideSound.addEventListener("input", function () {
  const volume = slideSound.value / 100;
  const music = document.querySelectorAll("audio");

  music.forEach((e) => {
    e.volume = volume;
  });
});
//BURGER SOUND SLIDE
const slideSoundBurger = document.getElementById("volumeSoundBurger");
slideSoundBurger.addEventListener("input", function () {
  const volumeBurger = slideSoundBurger.value / 100;
  const musicBurger = document.querySelectorAll("audio");

  musicBurger.forEach((e) => {
    e.volume = volumeBurger;
  });
});
