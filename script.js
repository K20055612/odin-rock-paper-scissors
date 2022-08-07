function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)]
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection.toLowerCase()) {
                case "paper":
                    return("You lose! Paper beats Rock");
                    break;
                case "scissors":
                    return("You win! Rock beats Scissors");
                    break;
                default:
                    return("Tie! You both selected Rock!");
                    break;
            }
            break;
        case "paper":
            switch(computerSelection.toLowerCase()) {
                case "scissors":
                    return("You lose! Scissors beats Paper");
                    break;
                case "rock":
                    return("You win! Paper beats Rock");
                    break;
                default:
                    return("Tie! You both selected Paper!");
                    break;
            }
            break;
        case "scissors":
            switch(computerSelection.toLowerCase()) {
                case "rock":
                    return("You lose! Rock beats Scissors");
                    break;
                case "paper":
                    return("You win! Scissors beats Paper");
                    break;
                default:
                    return("Tie! You both selected Scissors!");
                    break;
            }
            break;
        default:
            break;
      }
}
