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

	playerMove(direction) {
		if ((direction = 'right')) {
			this.playerPosition;
		}
	}

	playerPosition() {
		for (let i = 0; i < this.field.length; i++) {
			// console.log(this.field[i]);
			// if ((this.field[i] = '*')) {
			// 	this.verticalPlayerPosition = i;
			// 	// console.log(this.verticalPlayerPosition);
			// }
			for (let j = 0; j < this.field[i].length; j++) {
				if (this.field[i][j] === '*') {
					this.horizontalPlayerPosition = j;
				} else continue;
			}
			// console.log('horizontalPlayerPosition', horizontalPlayerPosition);
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
		['░', '░', '░'],
		['*', 'O', ''],
		['░', '^', '░'],
	],
	'Joolie'
);

// myField.print();
console.log(myField.print());
console.log(myField.name);
console.log(myField.playerPosition());
console.log(myField.horizontalPlayerPosition);
console.log(myField.verticalPlayerPosition);
