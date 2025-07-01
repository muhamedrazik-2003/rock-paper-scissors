function getComputerChoice() {
  choice = Math.floor(Math.random() * 3 + 1);

  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  }
  if (choice == 3) {
    return "scissors";
  }
}
// ui  //
const allButton = document.querySelectorAll("button");
const playerRockBtn = document.getElementById("player-rock");
const playerPaperBtn = document.getElementById("player-paper");
const playerScissorsBtn = document.getElementById("player-scissors");
const computerRockBtn = document.getElementById("computer-rock");
const computerPaperBtn = document.getElementById("computer-paper");
const computerScissorsBtn = document.getElementById("computer-scissors");
const playerScoreUpdate = document.getElementById("player");
const computerScoreUpdate = document.getElementById("computer");
const resultTxt = document.getElementById("result");
const roundNumber = document.getElementById("roundNumber");
const infoContainer = document.querySelector(".floating-info-container");
const floatingInfo = document.querySelector("#floating-info");
const gameEnded = document.querySelector("#game-ended-container");
const gameEndedStatus = document.querySelector(".game-status");
const gameEndedScore = document.querySelector(".game-score");
const playAgain = document.querySelector(".play-again");

infoContainer.addEventListener("click", () => {
  floatingInfo.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!infoContainer.contains(e.target)) {
    floatingInfo.classList.remove("show");
  }
});

playerRockBtn.addEventListener("click", () => getHumanChoice("rock"));
playerPaperBtn.addEventListener("click", () => getHumanChoice("paper"));
playerScissorsBtn.addEventListener("click", () => getHumanChoice("scissors"));

function getHumanChoice(humanSelection) {
  const computerSelection = getComputerChoice();
  return playRound(humanSelection, computerSelection);
}

let humanScore = 0;
let computerScore = 0;
let isLostButton = "";
let isWonButton = "";
let gameStatus = "";
let currentRound = 0;

function gameStatusIndicator(gameStatus, lostButton, wonButton) {
  if (gameStatus === "You won 😄") {
    resultTxt.style.backgroundColor = "hsl(113, 100%, 30%)";
    if (wonButton === "rock") {
      playerRockBtn.style.borderColor = "hsl(113, 100%, 30%)";
    } else if (wonButton === "paper") {
      playerPaperBtn.style.borderColor = "hsl(113, 100%, 30%)";
    } else if (wonButton === "scissors") {
      playerScissorsBtn.style.borderColor = "hsl(113, 100%, 30%)";
    }
    if (lostButton === "rock") {
      computerRockBtn.style.borderColor = "hsl(0, 100%, 45%)";
    } else if (lostButton === "paper") {
      computerPaperBtn.style.borderColor = "hsl(0, 100%, 45%)";
    } else if (lostButton === "scissors") {
      computerScissorsBtn.style.borderColor = "hsl(0, 100%, 45%)";
    }
  } else if (gameStatus === "You lost 🥺") {
    resultTxt.style.backgroundColor = "hsl(0, 100%, 45%)";
    if (lostButton === "rock") {
      playerRockBtn.style.borderColor = "hsl(0, 100%, 45%)";
    } else if (lostButton === "paper") {
      playerPaperBtn.style.borderColor = "hsl(0, 100%, 45%)";
    } else if (lostButton === "scissors") {
      playerScissorsBtn.style.borderColor = "hsl(0, 100%, 45%)";
    }
    if (wonButton === "rock") {
      computerRockBtn.style.borderColor = "hsl(113, 100%, 30%)";
    } else if (wonButton === "paper") {
      computerPaperBtn.style.borderColor = "hsl(113, 100%, 30%)";
    } else if (wonButton === "scissors") {
      computerScissorsBtn.style.borderColor = "hsl(113, 100%, 30%)";
    }
  } else if (gameStatus === "draw") {
    resultTxt.style.backgroundColor = "hsl(225, 100%, 30%)";
    if (wonButton === "rock" && lostButton === "rock") {
      playerRockBtn.style.borderColor = "hsl(225, 100%, 30%)";
      computerRockBtn.style.borderColor = "hsl(225, 100%, 30%)";
    } else if (wonButton === "paper" && lostButton === "paper") {
      playerPaperBtn.style.borderColor = "hsl(225, 100%, 30%)";
      computerPaperBtn.style.borderColor = "hsl(225, 100%, 30%)";
    } else if (wonButton === "scissors" && lostButton === "scissors") {
      playerScissorsBtn.style.borderColor = "hsl(225, 100%, 30%)";
      computerScissorsBtn.style.borderColor = "hsl(225, 100%, 30%)";
    }
  }
  setTimeout(() => {
    allButton.forEach((button) => {
      button.style.borderColor = "hsl(40, 100%, 11%)";
    });
    resultTxt.style.backgroundColor = "black";
    resultTxt.textContent = "Lets Play More 🤩";
  }, 1000);
}

function playRound(humanChoice, computerChoice) {
  currentRound++;
  roundNumber.textContent = currentRound;

  if (humanChoice == computerChoice) {
    isLostButton = humanChoice;
    isWonButton = computerChoice;
    gameStatus = "draw";
    gameStatusIndicator(gameStatus, isLostButton, isWonButton);
    resultTxt.textContent = "Its a Draw ";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    isLostButton = humanChoice;
    isWonButton = computerChoice;
    gameStatus = "You lost 🥺";
    gameStatusIndicator(gameStatus, isLostButton, isWonButton);
    resultTxt.textContent = "You Lose this Round 🥺";
    computerScore++;
    playerScoreUpdate.textContent = humanScore;
    computerScoreUpdate.textContent = computerScore;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    isWonButton = humanChoice;
    isLostButton = computerChoice;
    gameStatus = "You won 😄";
    gameStatusIndicator(gameStatus, isLostButton, isWonButton);
    resultTxt.textContent = "You Won this Round 😄";
    humanScore++;
    playerScoreUpdate.textContent = humanScore;
    computerScoreUpdate.textContent = computerScore;
  }
  // to check if player has won the Game//
  if (humanScore === 5 || computerScore === 5) {
    gameEnded.classList.add("show");
    gameEndedStatus.textContent = gameStatus;
    gameEndedScore.textContent =
      "Your Total Score is " + humanScore + " to " + computerScore;
    playAgain.addEventListener("click", () => {
      resetGame();
    gameEnded.classList.remove("show");

    });
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  playerScoreUpdate.textContent = humanScore;
  computerScoreUpdate.textContent = computerScore;
}
