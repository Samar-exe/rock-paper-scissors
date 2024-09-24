function getComputerChoice() {
  randomNumber = Math.random();
  if (randomNumber > 0.5) {
    return "rock";
  }
  else if (randomNumber < 0.5) {
    return "paper";
  }
  else if (randomNumber === 0.5) {
    return "scissors";
  }
  else {
    return "error";
  };
};

function compareElements(userChoice, computerChoice) {
  let win = 1;
  let loss = 0;
  let draw = -1;
  if (userChoice === 'rock' && computerChoice != 'rock') {
    if (computerChoice === 'paper') {
      return win;
    }
    else {
      return loss;
    };
  }
  else if (userChoice === 'paper' && computerChoice != 'paper') {
    if (computerChoice === 'rock') {
      return loss;
    }
    else {
      return win;
    };
  }
  else if (userChoice === 'scissors' && computerChoice != 'scissors') {
    if (computerChoice === 'rock') {
      return win;
    }
    else {
      return loss;
    }
  }
  else {
    return draw;
  };
};

function resultOfSingleRound(result) {
  let win = 1;
  let loss = 0;
  let draw = -1;
  if (result === 1) {
    return win;
  }
  else if (result === 0) {
    return loss;
  }
  else {
    return draw;
  };
};

function startGame(userChoice) {
  userChoice = userChoice;
  computerChoice = getComputerChoice();
  roundResult = resultOfSingleRound(compareElements(userChoice, computerChoice));
  if (roundResult === 1) {
    computerFinalScore += 1;
  }
  else if (roundResult === 0) {
    userFinalScore += 1;
  }
  scoreBoard.textContent = `Your Score: ${userFinalScore}  Computer Score: ${computerFinalScore}`;
  noOfRounds++;
  if (noOfRounds === 5) {

    if (userFinalScore > computerFinalScore) {
      scoreBoard.textContent = "You win";
    }
    else if (userFinalScore < computerFinalScore) {
      scoreBoard.textContent = "You lose";
    }
    else {
      scoreBoard.textContent = "Draw!!";
    };
  };
};

let elementButtons = document.querySelectorAll(".element-btn");
let scoreBoard = document.querySelector("#board");
let newGameButton = document.querySelector(".new-button");

let noOfRounds = 0;
let roundResult;
let userFinalScore = 0;
let computerFinalScore = 0;

elementButtons.forEach(element => {
  element.addEventListener("click", () => {
    if (noOfRounds != 5) {
      startGame(element.value);
    };
  })
})

newGameButton.addEventListener("click", () => {
  noOfRounds = 0;
  roundResult;
  userFinalScore = 0;
  computerFinalScore = 0;
  scoreBoard.textContent = "Start";
})
