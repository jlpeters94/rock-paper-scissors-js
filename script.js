let pickArray = ["rock", "paper", "scissors"]

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random()*pickArray.length);
	let numberToWord = pickArray[randomNumber];
	return numberToWord;
}

let playerScore = 0;
let computerScore = 0;

function game() {
	for (let round = 0; round < 5; round++){
		const selection = prompt("ROUND " + (round + 1) + ": Rock, Paper, Scissors?");
		const playerSelection = selection.toLowerCase();
		const computerSelection = getComputerChoice();
		if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		alert("You: " + playerSelection + " | Computer: " + computerSelection);
		alert("You: " + playerScore + " | Computer: " + computerScore);
		}
		else if (computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
		computerScore++;
		alert("You: " + playerSelection + " | Computer: " + computerSelection);
		alert("You: " + playerScore + " | Computer: " + computerScore);
		}
		else if (playerSelection === computerSelection) {
		alert("You: " + playerSelection + " | Computer: " + computerSelection);
		alert("You: " + playerScore + " | Computer: " + computerScore);
		}
		else {
			round -= 1;
		}
	}
	if (playerScore > computerScore) {
		alert("YOU WIN!");
	}
	else if (playerScore < computerScore) {
		alert("YOU LOSE!");
	}
	else if (playerScore === computerScore) {
		alert("DRAW!");
	}
}

game();