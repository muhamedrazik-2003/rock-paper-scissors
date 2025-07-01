function getComputerChoice() {
    choice = Math.floor(Math.random()*3+1);

    if (choice == 1){
        return "rock";
    }
    else if (choice == 2){
        return "paper";
    }
    if (choice == 3){
        return "scissors";
    }

}
// ui  //
const playerRockBtn = document.getElementById("player-rock");
const playerPaperBtn = document.getElementById("player-paper");
const playerScissorsBtn = document.getElementById("player-scissors");
const playerScoreUpdate = document.getElementById("player");
const computerScoreUpdate = document.getElementById("computer");
const resultTxt = document.getElementById("result");

playerRockBtn.addEventListener("click",() => getHumanChoice("rock"));
playerPaperBtn.addEventListener("click",() => getHumanChoice("paper"));
playerScissorsBtn.addEventListener("click",() => getHumanChoice("scissors"));

function getHumanChoice(humanSelection){
    const computerSelection = getComputerChoice();
    return playRound(humanSelection,computerSelection)
}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
   
    if (humanChoice == computerChoice){
        resultTxt.textContent = "Its a Draw ";
    }

    else if  (
        (humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")){
            resultTxt.textContent ="You Lose this Round 🥺";
            computerScore++ ;
            playerScoreUpdate.textContent = humanScore;
            computerScoreUpdate.textContent = computerScore;
    }
     else if  (
        (humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper") ){
            resultTxt.textContent ="You Won this Round 😄";
            humanScore++ ;
            playerScoreUpdate.textContent = humanScore;
            computerScoreUpdate.textContent = computerScore;

    }
    // to check if player has won the Game//
    if (humanScore === 5){
        resultTxt.textContent ="You Have Won the Game. Your Total Score is " + humanScore + " to " + computerScore + " ,Congragulations.";
        resetGame();
    }
    else if (computerScore === 5){ 
        resultTxt.textContent ="You Have lost the Game.Your Total Score is " + humanScore + " to " + computerScore + " ,Better Luck Next Time.";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreUpdate.textContent = humanScore;
    computerScoreUpdate.textContent = computerScore;
    
}


    