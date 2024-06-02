let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let resetScreen = false;

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.querySelector(".eqButton");
const clearButton = document.querySelector(".clearButton");

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (resetScreen) {
      display.textContent = "";
      resetScreen = false;
    }
    display.textContent += button.textContent;
  });
});

opButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (currentOperator !== null) compute();
    firstOperand = display.textContent;
    currentOperator = button.textContent;
    resetScreen = true;
  });
});

eqButton.addEventListener('click', () => {
  if (currentOperator === null || resetScreen) return;
  compute();
  currentOperator = null;
});

clearButton.addEventListener('click', () => {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
});

function compute() {
  if (currentOperator === null || resetScreen) return;

  secondOperand = display.textContent;
  const result = operate(currentOperator, firstOperand, secondOperand);
  display.textContent = result;
  firstOperand = result;
  resetScreen = true;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return 'Error! Div by 0';
      return a / b;
    default:
      return b;
  }
}
