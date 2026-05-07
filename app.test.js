const { add, subtract, multiply, divide } = require('./app');

// Testing add function
test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

// Testing subtract function
test('subtracts 10 - 4 = 6', () => {
  expect(subtract(10, 4)).toBe(8);
});

// Testing multiply function
test('multiplies 3 x 4 = 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

// Testing divide function
test('divides 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

// Testing divide by zero error
test('divide by zero throws error', () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero!");
});
