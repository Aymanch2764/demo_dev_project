// Simple Calculator - DevOps Demo
// GitHub Actions will automatically test this on every push

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
