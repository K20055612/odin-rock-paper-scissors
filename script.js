function compare(choice1, choice2) {
    switch(choice1.toLowerCase()) {
        case "rock":
            switch(choice2.toLowerCase()) {
                case "paper":
                    return(-1);
                    break;
                case "scissors":
                    return(1);
                    break;
                default:
                    return(0);
                    break;
            }
            break;
        case "paper":
            switch(choice2.toLowerCase()) {
                case "scissors":
                    return(-1);
                    break;
                case "rock":
                    return(1);
                    break;
                default:
                    return(0);
                    break;
            }
            break;
        case "scissors":
            switch(choice2.toLowerCase()) {
                case "rock":
                    return(-1);
                    break;
                case "paper":
                    return(1);
                    break;
                default:
                    return(0);
                    break;
            }
            break;
        default:
            return(NaN);
            break;
      }
}

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

function playRound(playerSelection, computerSelection) {
    return compare(playerSelection, computerSelection);
}

function game() {
    var score = 0;
    for(let i = 0; i < 5; i++) {
        var result = 0;
        while(result === 0) {
            var playerSelection = prompt("Rock, paper, scissors?", " ");
            var computerSelection = getComputerChoice();
            result = playRound(playerSelection, computerSelection);
            if(result === 0) {
                console.log(`Tie! You both selected ${computerSelection.toLowerCase()}`);
            } else if(result === 1) {
                console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
            } else {
                console.log(`You lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`);
            }
        }
        score += result;
    }
    if(score > 0) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

game()