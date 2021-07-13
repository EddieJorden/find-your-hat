const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
	constructor(fieldArr, hpp, vpp) {
		this.field = fieldArr;
		this.horizontalPlayerPosition = hpp;
		this.verticalPlayerPosition = vpp;
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
			if ((this.field[i] = '*')) {
				this.verticalPlayerPosition = i;
				// console.log(this.verticalPlayerPosition);
			}
			for (let j = 0; j < i.length; j++) {
				if ((j = '*')) {
					this.horizontalPlayerPosition = j;
				}
			}
		}
		let position = this.horizontalPlayerPosition;

		return position;
	}
	winningConditions() {}
}

const userSelection = 'right';

const myField = new Field([
	['*', '░', 'O'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

myField.print();
console.log(myField.print());
console.log(myField.playerPosition());
