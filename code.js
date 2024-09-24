
function getHumanChoice() {
  return prompt("Select Element");
};

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

function resultOfRound(result) {
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

function startGame() {
  for (let index = 0; index < 5; index++) {
    userChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = resultOfRound(compareElements(userChoice, computerChoice));
    if (roundResult === 1) {
      computerFinalScore += 1;
    }
    else if (roundResult === 0) {
      userFinalScore += 1;
    }
  };
  if (userFinalScore > computerFinalScore) {
    alert("You win");
  }
  else if (userFinalScore < computerFinalScore) {
    alert("You lose");
  }
  else {
    alert("Draw!!");
  };
  if(prompt("You wanna Play another? Round") === "yes"){
    startGame();
  }
};

let userChoice;
let computerChoice;
let roundResult;
let userFinalScore = 0;
let computerFinalScore = 0;
startGame();

