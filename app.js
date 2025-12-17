let randomnum = parseInt(Math.random() * 100 + 1);
const sub = document.querySelector("#submit");
const guessinp = document.querySelector("#guessnum");
const previousgasses = document.querySelector(".PreviousGuesses");
const lastGuesses = document.querySelector(".lastGuesses");
const lowandhigh = document.querySelector(".lowandhigh");
const resultpara = document.querySelector(".result-para");
const p = document.createElement("p");
let prveguess = [];
let newguess = 1;
let playgame = true;

if (playgame) {
  sub.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(guessinp.value);
    console.log(guess);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prveguess.push(guess);
    if (newguess === 11) {
      displayguess(guess);
      displayMessage(`Game is over random number was ${randomnum}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnum) {
    displayMessage(`Congratulations! Your Guess it Right `);
    endgame();
  } else if (guess < randomnum) {
    displayMessage(`Number is TOO Low`);
  } else if (guess > randomnum) {
    displayMessage(`Number is TOO High`);
  }
}

function displayguess(guess) {
  guessinp.value = "";
  previousgasses.innerHTML += `${guess} , `;
  newguess++;
  lastGuesses.innerHTML = `${11 - newguess}`;
}

function displayMessage(message) {
  lowandhigh.innerHTML = `<h1>${message}</h1>`;
}

function newgame() {
  const newgame = document.querySelector("#newgame");
  newgame.addEventListener("click", (e) => {
    randomnum = parseInt(Math.random() * 100 + 1);
    prveguess = [];
    newguess = 1;
    previousgasses.innerHTML = "";
    lastGuesses.innerHTML = `${11 - newguess}`;
    guessinp.removeAttribute("disabled");
    resultpara.removeChild(p);
    playgame = true;
  });
}

function endgame() {
  guessinp.value = "";
  guessinp.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newgame" class="text-white mt-3 text-center font-semibold text-xl">Start New Game</h2>`;
  resultpara.appendChild(p);
  playgame = false;
  newgame();
}
