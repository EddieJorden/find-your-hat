const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
	constructor(fieldArr, name) {
		this.field = fieldArr;
		this.horizontalPlayerPosition = null;
		this.verticalPlayerPosition = null;
		this.name = name;
	}
	print() {
		const joinedFieldArr = this.field.join('');
		return joinedFieldArr;
	}

	playerMove(playerChoice) {
		const startingHorizontalPlayerPosition = this.horizontalPlayerPosition;
		if (playerChoice === 'right') {
			if (playerChoice === 'right' && startingHorizontalPlayerPosition === 0) {
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
			return this.field;
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
		['░', '░', '*'],
		['░', 'O', ''],
		['░', '^', '░'],
	],
	'Joolie'
);

// myField.print();
console.log(myField.print());
console.log(myField.name);
console.log(myField.playerPosition());
console.log(
	'myField.horizontalPlayerPosition',
	myField.horizontalPlayerPosition
);
console.log('myField.verticalPlayerPosition', myField.verticalPlayerPosition);
console.log(myField.playerMove('right'));
