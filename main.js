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
	}
	print() {
		const joinedFieldArr = this.field.join('');
		return this.field;
	}

	playerChoice() {
		const prompt = require('prompt-sync')();

		const choice = prompt('what direction would you like to move?');
		console.log(`you chose ${choice}`);

		return choice;
	}

	gameLoop() {
		for (let i = 0; this.winningConditions() === false; i++) {
			let userInput = this.playerChoice();
			let playerPosition = this.playerPosition();
			this.playerMove(userInput);
		}
	}

	playerMove(userInput) {
		console.log('userInput', userInput);
		const startingHorizontalPlayerPosition = this.horizontalPlayerPosition;
		console.log(this.horizontalPlayerPosition);
		if (userInput === 'right') {
			if (userInput === 'right' && startingHorizontalPlayerPosition === 0) {
				console.log('userInput number 2', userInput);
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
				console.log('player position is 0 or 1');
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
			let currentFieldArr = this.print();
			// currentFieldArr.push(this.field)
			// console.log(currentFieldArr)
			console.log('currentFieldArr', currentFieldArr);
			return currentFieldArr;
		}
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
	winningConditions() {
		// let gameWon = this.playerChoice();
		// console.log(gameWon);
		if (this.playerInput === 'r') {
			return true;
		} else return false;
	}
}

const myField = new Field([
	['*', '░', '░'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

// myField.print();
// console.log('myField.print()', myField.print());

// console.log(myField.playerPosition());
// console.log(
// 	'myField.horizontalPlayerPosition',
// 	myField.horizontalPlayerPosition
// );
// console.log('myField.verticalPlayerPosition', myField.verticalPlayerPosition);

// const playerMovedRight = myField.playerMove('right');
// const playerMovedRightAgain = myField.playerMove('right', playerMovedRight);
// console.log('playerMovedRight', playerMovedRight);
// console.log(playerMovedRightAgain)

myField.gameLoop();
