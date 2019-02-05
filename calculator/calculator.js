const calcResult = document.getElementById('calcResult');
const opButton = document.querySelectorAll('.opButton');
const numButton = document.querySelectorAll('.numButton');
const acButton = document.getElementById('ac');

let result = 0;
let numberToCalc = '';
let calcOp = '';

calcResult.textContent = result;

acButton.addEventListener('click', clearAll);

numButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		numberToCalc += button.id;
		calcResult.textContent = numberToCalc;
	});
});

opButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		solveCalc();
		calcOp = button.id;
	})
});

function clearAll() {
	result = 0;
	numberToCalc = '';
	calcOp = '';
	calcResult.textContent = 0;
}

function solveCalc() {
	switch (calcOp) {
		case 'plus':
			result += Number(numberToCalc);
			numberToCalc = '';
			calcResult.textContent = result;
			break;

			case 'minus':
			result -= Number(numberToCalc);
			numberToCalc = '';
			calcResult.textContent = result;
			break;

			case 'multiply':
			result *= Number(numberToCalc);
			numberToCalc = '';
			calcResult.textContent = result;
			break;

			case 'power':
			result = Math.pow(result, numberToCalc);
			numberToCalc = '';
			calcResult.textContent = result;
			break;

			case 'equals':
			calcOp = '';
			break;
	
		default:
			result = Number(numberToCalc);
			numberToCalc = '';
			calcResult.textContent = result;
			break;
	}
}

/*
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

function sum () {
	
}

function factorial() {
	
}

*/