const options = document.querySelectorAll("#option");
const moveHistory = document.createElement("p");

let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
	option.addEventListener("click", () => {
		const playerSelection = option.value;
		const cOptions = ["rock", "paper", "scissors"]
		const computerSelection = cOptions[Math.floor(Math.random() * cOptions.length)];
		document.querySelector("#winner").textContent = "";
		game(playerSelection, computerSelection);
		updateScore();
		addHistory(playerSelection, computerSelection);
		if (checkWinner()) {
			playerScore = 0;
			computerScore = 0;
			updateScore();
		}
	});
	moveHistory.remove();
});

function addHistory(playerSelection, computerSelection) {
	moveHistory.innerText = "You chose " +playerSelection.toUpperCase() + ". Computer chose " + computerSelection.toUpperCase() + ".";
	document.querySelector("#history").appendChild(moveHistory);
}

function game(playerSelection, computerSelection) {

		if (playerSelection === "rock" && computerSelection === "scissors" || 
		playerSelection === "paper" && computerSelection === "rock" || 
		playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		}

		else if (computerSelection === "rock" && playerSelection === "scissors" || 
		computerSelection === "paper" && playerSelection === "rock" || 
		computerSelection === "scissors" && playerSelection === "paper") {
		computerScore++;
		}

		else if (playerSelection === computerSelection) {
		}
}

function updateScore() {
	document.querySelector("#playerScore").innerHTML = playerScore;
	document.querySelector("#computerScore").innerHTML = computerScore;
}

function checkWinner() {
	if (playerScore === 5 || computerScore === 5) {
		const winner =
		playerScore === 5
			? "YOU WIN!"
			: "YOU LOSE!";
		document.querySelector("#winner").textContent = winner;
		return true;
	}
	return false;
}