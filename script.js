let currentNumber = '';
let previousNumber = '';
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (currentNumber.length >= 10) return;
  currentNumber += number;
  updateDisplay();
}

function chooseOperator(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  if (previousNumber === '' || currentNumber === '' || operator === null) return;

  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentNumber = result.toString().slice(0, 10);
  previousNumber = '';
  operator = null;
  updateDisplay();
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentNumber || '0';
}
