let playerScore = 0;
let computerScore = 0;

function ComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}.`;
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function playGame(playerSelection) {
  let computerSelection = ComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  document.getElementById("output").textContent = result;

  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  document.getElementById("score").textContent =
    `Score - You: ${playerScore}, Computer: ${computerScore}`;
}
