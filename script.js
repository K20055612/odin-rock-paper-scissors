var score = 0;
var round = 0;
const ROUND_COUNT = 5;

const scoreLabel = document.querySelector(".score-label");
const buttons = document.querySelectorAll(".player-choice");
const panel = document.querySelector(".panel");
const body = document.querySelector("body");
const winnerLabel = document.createElement('div');
const resetButton = document.createElement('button');
resetButton.textContent = "Play again!";
resetButton.addEventListener('click', (e) => resetGame());
resetButton.classList.add("reset-button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => play(e));
  });

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

function play(e) {
    var result = 0;
    var playerSelection = e.target.id;
    var computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    if(result === 0) {
        console.log(`Tie! You both selected ${computerSelection.toLowerCase()}`);
    } else if(result === 1) {
        console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`);
    } else {
        console.log(`You lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`);
    }
    score += result;

    updateScore();

    if(result !== 0) {
        round++;
    }

    if(round === 5) {  
        endGame(score);
    }
}

function endGame(score) {
    buttons.forEach(button => button.disabled = true);
    winnerLabel.textContent = score > 0 ? "You win!" : "You lose!";
    panel.appendChild(winnerLabel);
    panel.appendChild(resetButton);
}

function resetGame() {
    panel.removeChild(winnerLabel);
    panel.removeChild(resetButton);
    buttons.forEach(button => button.disabled = false);
    score = 0;
    updateScore();
    round = 0;
}

function updateScore() {
    scoreLabel.textContent = "SCORE: " + score;
}