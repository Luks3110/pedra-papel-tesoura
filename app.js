let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return 'Pedra';
	if (letter === "s") return 'Tesoura';
	if (letter === "p") return 'Papel';
}

function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	/*computerScore_span.innerHTML = computerScore;*/
	const smallUserWord = 'user'.fontsize(3);
	const smallCompWord = 'comp'.fontsize(3);
	result_div.innerHTML = convertToWord(userChoice)+(smallUserWord) + ' ganhou de ' + convertToWord(computerChoice)+(smallCompWord);
}

function lose(userChoice, computerChoice){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	/*computerScore_span.innerHTML = computerScore;*/
	const smallUserWord = 'user'.fontsize(3);
	const smallCompWord = 'comp'.fontsize(3);
	result_div.innerHTML = convertToWord(computerChoice)+(smallCompWord) + " ganhou de " + convertToWord(userChoice)+(smallUserWord) + ". O computador ganhou.";
	
}
function draw(userChoice, computerChoice){
	/*computerScore_span.innerHTML = computerScore;*/
	const smallUserWord = 'user'.fontsize(3);
	const smallCompWord = 'comp'.fontsize(3);
	result_div.innerHTML = convertToWord(computerChoice)+(smallCompWord) + " empatou com " + convertToWord(userChoice)+(smallUserWord) + ". Empate!";
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	console.log(userChoice + computerChoice);

	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			console.log("Empate")
			draw(userChoice, computerChoice);
			break;		
	}

}


function main(){

	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})

}

main();