const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
	constructor(fieldArr) {
		this.field = fieldArr
		this.horizontalPlayerPosition = null;
		this.verticalPlayerPosition = null;
		
	}
	print() {
		const joinedFieldArr = this.field.join('');
		return this.field;
	}

	playerMove(playerChoice, currentField) {
		
		const startingHorizontalPlayerPosition = this.horizontalPlayerPosition;
		if (playerChoice === 'right') {
			if (playerChoice === 'right' && startingHorizontalPlayerPosition === 0) {
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
			if (playerChoice === 'right' && startingHorizontalPlayerPosition === 1) {
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
			if (playerChoice === 'right' && startingHorizontalPlayerPosition === 2) {
				this.field[this.verticalPlayerPosition].splice(0, 1, '*');
				this.field[this.verticalPlayerPosition].splice(
					startingHorizontalPlayerPosition,
					1,
					'░'
				);
			}
			let currentFieldArr = this.field
			// currentFieldArr.push(this.field)
			// console.log(currentFieldArr)
			console.log(currentFieldArr)
			return currentFieldArr
		} else return 'not right';

	}

	playerPosition() {
		for (let i = 0; i < this.field.length; i++) {
			for (let j = 0; j < this.field[i].length; j++) {
				if (this.field[i][j] === '*') {
					this.horizontalPlayerPosition = j;
				} else continue;
			}
		}
		for (let k = 0; k < this.field.length; k++) {
			for (let l = 0; l < this.field[k].length; l++) {
				if (this.field[k][l] === '*') {
					this.verticalPlayerPosition = k;
				} else continue;
			}
		}
		return (
			'Player Position = ' +
			this.horizontalPlayerPosition +
			' X ' +
			this.verticalPlayerPosition
		);
	}
	winningConditions() {}
}

const myField = new Field(
	[
		['*', '░', '░'],
		['░', 'O', '░'],
		['░', '^', '░'],
	]
	
);

// myField.print();
console.log('myField.print()', myField.print());

console.log(myField.playerPosition());
console.log(
	'myField.horizontalPlayerPosition',
	myField.horizontalPlayerPosition
);
console.log('myField.verticalPlayerPosition', myField.verticalPlayerPosition);

const playerMovedRight = myField.playerMove('right')
const playerMovedRightAgain = myField.playerMove('right', playerMovedRight)
console.log('playerMovedRight', playerMovedRight);
console.log(playerMovedRightAgain)




