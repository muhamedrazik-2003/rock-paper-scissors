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

// console.log(getComputerChoice())


function getHumanChoice(choice){
    
    choice = prompt("please enter Your Choice(Rock, Paper or Scissors): ").toLowerCase();
    
    return choice;
}
// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;



function playGame() {
    for( i =0; i<=5; i++){
        
        function playRound(humanChoice, computerChoice) {

    
            if (humanChoice == computerChoice){
                console.log("Its a Draw ");
            }
        
            else if  (
                (humanChoice == "rock" && computerChoice == "paper") || 
                (humanChoice == "paper" && computerChoice == "scissors") || 
                (humanChoice == "scissors" && computerChoice == "rock")){
                    console.log("You Lose this Round");
                    computerScore++ ;
                    console.log("Score- Player: "+ humanScore + " Computer: " + computerScore);
            }
             else if  (
                (humanChoice == "rock" && computerChoice == "scissors") || 
                (humanChoice == "paper" && computerChoice == "rock") || 
                (humanChoice == "scissors" && computerChoice == "paper") ){
                    console.log("You Won this Round");
                    humanScore++ ;
                    console.log("Score- Player: "+ humanScore + " Computer: " + computerScore);

            }
        
            else {
                console.log("Invalid Value, PLease enter Rock, Paper or Scissors.");
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection,computerSelection)

        
    }

}


playGame()
if (humanScore > computerScore){
    console.log("You Have Won the Game. Your Total Score is " + humanScore + " to " + computerScore + " ,Congragulations.");
}

else {
    console.log("You Have lost the Game. Your Total Score is " + humanScore + " to " + computerScore + " ,Better Luck Next Time.");

}

