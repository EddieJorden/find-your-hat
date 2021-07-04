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
}

const myField = new Field([
	['*', '░', 'O'],
	['░', 'O', '░'],
	['░', '^', '░'],
]);

console.log(myField.print());
