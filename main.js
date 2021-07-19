const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
	constructor(fieldArr) {
		this.field = fieldArr;
		this.horizontalPlayerPosition = null;
		this.verticalPlayerPosition = null;
		this.playerInput = null;
		this.horizontalHatPosition = null;
		this.verticalHatPosition = null;
		this.horizontalHolePosition = null;
		this.verticalHolePosition = null;
		this.playerDead = false;
		this.gameOver = false;
		this.turnCount = 0;
		this.freshField = fieldArr;
	}
	print() {
		this.field.forEach((item) => {
			console.log(item);
		});
	}

	playerChoice() {
		const prompt = require('prompt-sync')();

		const choice = prompt('what direction would you like to move?');
		console.log(`you chose ${choice}`);

		return choice;
	}
	restartOrExit() {
		const prompt = require('prompt-sync')();

		const choice = prompt('exit or restart?');
		console.log(`you chose ${choice}`);

		return choice;
	}

	gameLoop(fieldArr) {
		const freshField = this.freshField;
		if (this.gameOver === false) {
			for (let i = 0; this.gameOver === false; i++) {
				this.turnCount = i;
				this.print();
				let userInput = this.playerChoice();
				this.playerPosition();
				this.hatPosition();
				this.playerMove(userInput);
				this.winningConditions();
			}
		}
		if (this.gameOver === true) {
			let userRestartOrExit = this.restartOrExit();
			if (userRestartOrExit === 'restart') {
				this.gameOver = false;
				const newGame = new Field([
					['*', '░', '░'],
					['░', 'O', '░'],
					['░', '^', '░'],
				]);
				newGame.gameLoop();
			} else console.log('exiting');
		}
	}

	playerMove(userInput) {
		const startingHorizontalPlayerPosition = this.horizontalPlayerPosition;
		const startingVerticalPlayerPosition = this.verticalPlayerPosition;

		if (userInput === 'right') {
			if (userInput === 'right' && startingHorizontalPlayerPosition === 0) {
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition + 1,
					1,
					'*'
				);
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'right' && startingHorizontalPlayerPosition === 1) {
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition + 1,
					1,
					'*'
				);
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'right' && startingHorizontalPlayerPosition === 2) {
				this.field[this.verticalPlayerPosition].splice(0, 1, '*');
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
		}
		if (userInput === 'left') {
			if (userInput === 'left' && startingHorizontalPlayerPosition === 0) {
				this.field[this.verticalPlayerPosition].splice(2, 1, '*');
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'left' && startingHorizontalPlayerPosition === 1) {
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition - 1,
					1,
					'*'
				);
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'left' && startingHorizontalPlayerPosition === 2) {
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition - 1,
					1,
					'*'
				);
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
		}
		if (userInput === 'up') {
			if (userInput === 'up' && startingVerticalPlayerPosition === 0) {
				this.field[2].splice(this.horizontalPlayerPosition, 1, '*');
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'up' && startingVerticalPlayerPosition === 2) {
				this.field[1].splice(startingHorizontalPlayerPosition, 1, '*');
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'up' && startingVerticalPlayerPosition === 1) {
				this.field[startingVerticalPlayerPosition - 1].splice(
					startingHorizontalPlayerPosition,
					1,
					'*'
				);
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
		}
		if (userInput === 'down') {
			if (userInput === 'down' && startingVerticalPlayerPosition === 0) {
				this.field[startingVerticalPlayerPosition + 1].splice(
					this.horizontalPlayerPosition,
					1,
					'*'
				);
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'down' && startingVerticalPlayerPosition === 2) {
				this.field[0].splice(startingHorizontalPlayerPosition, 1, '*');
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			if (userInput === 'down' && startingVerticalPlayerPosition === 1) {
				this.field[startingVerticalPlayerPosition + 1].splice(
					startingHorizontalPlayerPosition,
					1,
					'*'
				);
				this.field[startingVerticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
		}
		this.winningConditions();
	}

	playerPosition() {
		for (let i = 0; i < this.field.length; i++) {
			for (let j = 0; j < this.field[i].length; j++) {
				if (this.field[i][j] === '*') {
					this.horizontalPlayerPosition = j;
				}
			}
		}
		for (let k = 0; k < this.field.length; k++) {
			for (let l = 0; l < this.field[k].length; l++) {
				if (this.field[k][l] === '*') {
					this.verticalPlayerPosition = k;
				}
			}
		}
	}
	hatPosition() {
		for (let i = 0; i < this.field.length; i++) {
			for (let j = 0; j < this.field[i].length; j++) {
				if (this.field[i][j] === '^') {
					this.horizontalHatPosition = j;
				}
			}
		}
		for (let k = 0; k < this.field.length; k++) {
			for (let l = 0; l < this.field[k].length; l++) {
				if (this.field[k][l] === '^') {
					this.verticalHatPosition = k;
				}
			}
		}
	}
	holePosition() {
		for (let i = 0; i < this.field.length; i++) {
			for (let j = 0; j < this.field[i].length; j++) {
				if (this.field[i][j] === 'O') {
					this.horizontalHolePosition = j;
				}
			}
		}
		for (let k = 0; k < this.field.length; k++) {
			for (let l = 0; l < this.field[k].length; l++) {
				if (this.field[k][l] === 'O') {
					this.verticalHolePosition = k;
				}
			}
		}
	}
	deadPlayerConditions() {
		if (
			this.horizontalPlayerPosition === this.horizontalHolePosition &&
			this.verticalPlayerPosition === this.verticalHolePosition
		) {
			this.playerDead = true;
		} else this.playerDead = false;
	}
	winningConditions() {
		this.hatPosition();
		this.holePosition();
		this.deadPlayerConditions();
		this.playerPosition();

		if (this.playerDead === true) {
			console.log(`you have died in ${this.turnCount + 1} turns`);
			this.gameOver = true;
		} else if (
			this.playerDead === false &&
			this.horizontalPlayerPosition === this.horizontalHatPosition &&
			this.verticalPlayerPosition === this.verticalHatPosition
		) {
			console.log(`you have found your hat in ${this.turnCount + 1} turns`);
			this.gameOver = true;
		}
	}
}

const myField = new Field([
	['*', '░', '░'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

myField.gameLoop();
