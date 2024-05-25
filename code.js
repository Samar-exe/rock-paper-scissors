function getComputerChoice() {
  let random = Math.floor(Math.random() * (4 - 1) + 1);
  if (random === 1) {
    return "rock"
  }
  else if (random === 2) {
    return "paper"
  }
  else if (random === 3) {
    return "scissors"
  }
  else {
    return "There was an unexpected error"
  }
}
function getHumanChoice() {
  let input = prompt("Enter your choice")
  input = input.toLowerCase();
  if (input === "rock") {
    return input;
  }
  else if (input === "paper") {
    return input;
  }
  else if (input == "scissor") {
    return input;
  }
  else {
    return "human input invalid"
  }
}


function playGame() {
  function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    if (humanSelection === ("rock")) {
      if (computerSelection === ("paper")) {
        console.log("paper wins");
        computerScore += 1;
      }
      else if (computerSelection === ("rock")) {
        console.log("Both selected the same thing");
      }
      else {
        if (computerSelection === ("scissors")) {
          console.log("rock wins");
          humanScore += 1;
        }
      }
    }
    else if (humanSelection === ("paper")) {
      if (computerSelection === ("rock")) {
        console.log("paper wins");
        humanScore += 1;
      }
      else if (computerSelection === ("paper")) {
        console.log("Both selected the same thing");
      }
      else {
        if (computerSelection === ("scissors")) {
          console.log("scissors wins");
          computerScore += 1;
        }
      }
    }
    else if (humanSelection === ("scissors")) {
      if (computerSelection === ("paper")) {
        console.log("scissors wins");
        humanScore += 1;
      }
      else if (computerSelection === ("scissors")) {
        console.log("Both selected the same thing");
      }
      else {
        if (computerSelection === ("rock")) {
          console.log("rock wins");
          computerScore += 1;
        }
      }
    }
    else {
      console.log("Invalid choice")
      playRound();
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

}

let humanScore = 0;
let computerScore = 0;
playGame();
if (humanScore > computerScore) {
  console.log("You Win!")
}
else if (computerScore > humanScore) {
  console.log("You Lose!")
}
else {
  console.log("It's a Tie!")
}
