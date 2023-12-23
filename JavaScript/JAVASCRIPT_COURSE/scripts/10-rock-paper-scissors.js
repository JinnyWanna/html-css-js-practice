// object를 const로 해도 내부 값은 value이기 때문에 변경가능.
	// objcet 객체의 주소가 const로 고정되는것. 주소 바꿀일 없기에 const로 이용하는게 맞다. // 불러오는게 null값이라 재지정하는경우 주소 바뀌기때문에 let도 좋음
let score = JSON.parse(localStorage.getItem('score')) || {
		wins: 0,
		losses: 0,
		ties: 0
	};

	
updateScoreElement();


	//// function

function playGame(playerMove) {
	let computerMove = pickComputerMove();

	////
	let result ='';

	if(computerMove === playerMove) {
		result = 'Tie.';
		score.ties++;
	}

	else if(computerMove === 'rock') {
		if(playerMove === 'paper') {
			result = 'You win.';
			score.wins++;
			}
		else if(playerMove === 'scissors') {
			result = 'You lose.';
			score.losses++;
		}
	}

	else if(computerMove === 'scissors') {
		if(playerMove === 'paper') {
			result = 'You lose.';
			score.losses++;
		}
		else if(playerMove === 'rock') {
			result = 'You win.';
			score.wins++;
		}
	}

	else if(computerMove === 'paper') {
		if(playerMove === 'rock') {
			result = 'You lose.';
			score.losses++;
		}
		else if(playerMove === 'scissors') {
			result = 'You win.';
			score.wins++;
		}
	}

	localStorage.setItem('score', JSON.stringify(score));
	// localstorage에는 string만 저장 가능. 그래서 score파일을 JSON으로 바꿔서 저장함.
	// https://www.daleseo.com/js-web-storage/
	// -- localStorage이용해서 같은엔진웹사이트에서 데이터 세이브 가능

	// alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
	updateScoreElement();

	document.querySelector('.js-result').innerHTML = result;
	document.querySelector('.js-moves').innerHTML = `You <img src="image-rock-paper-scissors/${playerMove}-emoji.png" class="move-icon">
	<img src="image-rock-paper-scissors/${computerMove}-emoji.png" class="move-icon"> Computer`;
	return 0;
}

function pickComputerMove() {
	const randomNumber = Math.random();  

	if(randomNumber >= 0 && randomNumber <1/3) {
		computerMove = 'rock';
	}

	else if(randomNumber >= 1/3 && randomNumber < 2/3) {
		computerMove = 'scissors';
	}

	else {
		computerMove = 'paper';
	}
	
	return computerMove;
}

function updateScoreElement() {
	document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore(){
	score.wins = 0;
	score.losses = 0;
	score.ties = 0;
	localStorage.removeItem('score');
	updateScoreElement();
	
	return;
}