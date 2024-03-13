let playerScore = 0;
let compScore = 0;
const choices = ['rock', 'paper', 'scissors'] 
const resultContainer = document.getElementById("results-container");

function playRound(playerSelection, computerSelection) { 
    
if (playerSelection === computerSelection) {
resultContainer.innerHTML = "It's a Tie!"
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
playerScore++
resultContainer.innerHTML = "You win! Rock beats scissors!<br><br>Player: " + playerScore + " Computer: " + compScore;
}

else if (playerSelection === "rock" && computerSelection === "paper") {
compScore++
resultContainer.innerHTML = "You lose! Paper beats Rock!<br><br>Player: " + playerScore + " Computer: " + compScore;

}

else if (playerSelection === "paper" && computerSelection === "scissors") {
compScore++
resultContainer.innerHTML = "You lose! Scissors beats Paper!<br><br>Player: " + playerScore + " Computer: " + compScore;
}

else if (playerSelection === "paper" && computerSelection === "rock") {
playerScore++
resultContainer.innerHTML = "You win! Paper beats Rock!<br><br>Player: " + playerScore + " Computer: " + compScore;
}

else if (playerSelection === "scissors" && computerSelection === "rock") {
compScore++
resultContainer.innerHTML = "You lose! Rock beats scissors!<br><br>Player: " + playerScore + " Computer: " + compScore;

}

else if(playerSelection === "scissors" && computerSelection === "paper") {
playerScore++
resultContainer.innerHTML = "You win! Scissors beats paper!<br><br>Player: " + playerScore + " Computer: " + compScore;
}
}


document.getElementById("rock").addEventListener("click", function() {
    playRound("rock", getComputerChoice());
    game();
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper", getComputerChoice());
    game();
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors", getComputerChoice());
    game();
});




function game() {
const results = document.getElementById("results");
    if (playerScore === 5) {
        results.innerHTML = "You have beaten the Computer! <br> Refresh the page to play again";
        resetScores()
    }
    else if (compScore === 5) {
        results.innerHTML = "The Computer has beaten you! <br> Refresh the page to play again";
        resetScores()
    }
}

function resetScores() {
   playerScore = 0;
   compScore = 0;
}


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


