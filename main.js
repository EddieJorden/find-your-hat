const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
	constructor(fieldArr) {
		this.field = fieldArr;
	}
	print() {
		const joinedFieldArr = this.field.join('');
		return joinedFieldArr;
	}
	moveRight() {
	
	}
	playerPosition() {
		let playerLocation = null
		for(let i = 0; i < 1; i ++) {
			// console.log(this.field[i])
			for(let j = 0; j < this.field[i].length; j ++) {
				// console.log(this.field[i][j])
				if(this.field[i][j] === '*') {
					playerLocation = this.field[i][j]
				} 
			}
		} return playerLocation
	}
}

const myField = new Field([
	['*', '░', 'O'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

console.log(myField.print());
console.log(myField.playerPosition())
