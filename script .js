const options = document.querySelectorAll("#option");

let pickArray = ["rock", "paper", "scissors"]

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random()*pickArray.length);
	let numberToWord = pickArray[randomNumber];
	return numberToWord;
}

let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
	option.addEventListener("click", function () {
		const playerSelection = this.value;
		const computerSelection = getComputerChoice();
		game();
		updateScore();
	});
});

function game() {

		if (playerSelection === "rock" && computerSelection === "scissors" || 
		playerSelection === "paper" && computerSelection === "rock" || 
		playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
			alert("You: " + playerSelection + " | Computer: " + computerSelection);
			alert("You: " + playerScore + " | Computer: " + computerScore);
		}

		else if (computerSelection === "rock" && playerSelection === "scissors" || 
		computerSelection === "paper" && playerSelection === "rock" || 
		computerSelection === "scissors" && playerSelection === "paper") {
		computerScore++;
			alert("You: " + playerSelection + " | Computer: " + computerSelection);
			alert("You: " + playerScore + " | Computer: " + computerScore);
		}

		else if (playerSelection === computerSelection) {
			alert("You: " + playerSelection + " | Computer: " + computerSelection);
			alert("You: " + playerScore + " | Computer: " + computerScore);
		}
}

function updateScore() {
	document.getElementById("#playerScore").textContent = playerScore;
	document.getElementById("#computerScore").textContent = computerScore;
}