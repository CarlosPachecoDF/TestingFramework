import { add, exponentiation, multiplication, remainder, subtract } from "../calculator";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply two numbers correctly", () => {
  expect(multiplication(6, 4)).toBe(24);
});

test("extract the remainder of two numbers correctly", () => {
  expect(remainder(5, 2)).toBe(1);
});

test("power two numbers correctly", () => {
  expect(exponentiation(3, 2)).toBe(9);
});



// Add more test cases for the other calculator functions
