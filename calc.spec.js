// calculator.test.js

describe('Calculator', () => {
    const Calculator = require('./calculator');
    let calc;
  
    beforeEach(() => {
      calc = new Calculator();
    });
  
    describe('Addition', () => {
      test('small numbers', () => {
        expect(calc.add(2, 3)).toBe(5.00);
        expect(calc.add(0, 1)).toBe(1.00);
        expect(calc.add(-1, 1)).toBe(0.00);
      });
  
      test('decimal numbers', () => {
        expect(calc.add(2.25, 3.45)).toBe(5.70);
        expect(calc.add(0.1, 0.2)).toBe(0.30);
        expect(calc.add(1.999, 1.001)).toBe(3.00);
      });
  
      test('large numbers', () => {
        expect(calc.add(999999, 1)).toBe(1000000.00);
        expect(calc.add(123456.78, 876543.22)).toBe(1000000.00);
      });
    });
  
    describe('Subtraction', () => {
      test('small numbers', () => {
        expect(calc.subtract(5, 3)).toBe(2.00);
        expect(calc.subtract(1, 1)).toBe(0.00);
        expect(calc.subtract(0, 1)).toBe(-1.00);
      });
  
      test('decimal numbers', () => {
        expect(calc.subtract(5.75, 2.25)).toBe(3.50);
        expect(calc.subtract(0.3, 0.1)).toBe(0.20);
        expect(calc.subtract(2.5, 1.25)).toBe(1.25);
      });
  
      test('large numbers', () => {
        expect(calc.subtract(1000000, 1)).toBe(999999.00);
        expect(calc.subtract(987654.32, 123456.32)).toBe(864198.00);
      });
    });
  
    describe('Multiplication', () => {
      test('small numbers', () => {
        expect(calc.multiply(2, 3)).toBe(6.00);
        expect(calc.multiply(0, 5)).toBe(0.00);
        expect(calc.multiply(-2, 3)).toBe(-6.00);
      });
  
      test('decimal numbers', () => {
        expect(calc.multiply(2.5, 2.5)).toBe(6.25);
        expect(calc.multiply(0.1, 0.1)).toBe(0.01);
        expect(calc.multiply(1.5, 2.5)).toBe(3.75);
      });
  
      test('large numbers', () => {
        expect(calc.multiply(1000, 1000)).toBe(1000000.00);
        expect(calc.multiply(123456.78, 8)).toBe(987654.24);
      });
    });
  
    describe('Division', () => {
      test('small numbers', () => {
        expect(calc.divide(6, 2)).toBe(3.00);
        expect(calc.divide(5, 2)).toBe(2.50);
        expect(calc.divide(-6, 2)).toBe(-3.00);
      });
  
      test('decimal numbers', () => {
        expect(calc.divide(2.5, 2)).toBe(1.25);
        expect(calc.divide(0.1, 2)).toBe(0.05);
        expect(calc.divide(1.5, 0.5)).toBe(3.00);
      });
  
      test('large numbers', () => {
        expect(calc.divide(1000000, 1000)).toBe(1000.00);
        expect(calc.divide(987654.32, 2)).toBe(493827.16);
      });
  
      test('division by zero', () => {
        expect(calc.divide(5, 0)).toBe('ERROR');
        expect(calc.divide(0, 0)).toBe('ERROR');
        expect(calc.divide(-5, 0)).toBe('ERROR');
      });
    });
  
    describe('Input Validation', () => {
      test('reject more than two numbers', () => {
        expect(() => calc.add(1, 2, 3)).toThrow('Only two numbers allowed');
        expect(() => calc.subtract(1, 2, 3)).toThrow('Only two numbers allowed');
        expect(() => calc.multiply(1, 2, 3)).toThrow('Only two numbers allowed');
        expect(() => calc.divide(1, 2, 3)).toThrow('Only two numbers allowed');
      });
  
      test('handle invalid inputs', () => {
        expect(() => calc.add('a', 2)).toThrow('Invalid input');
        expect(() => calc.subtract(1, 'b')).toThrow('Invalid input');
        expect(() => calc.multiply(null, 2)).toThrow('Invalid input');
        expect(() => calc.divide(1, undefined)).toThrow('Invalid input');
      });
    });
  
    describe('Decimal Handling', () => {
      test('create proper decimals', () => {
        expect(calc.add(1.23456, 2.34567)).toBe(3.58);
        expect(calc.subtract(5.6789, 2.3456)).toBe(3.33);
        expect(calc.multiply(1.23, 1.23)).toBe(1.51);
        expect(calc.divide(10, 3)).toBe(3.33);
      });
  
      test('handle recurring decimals', () => {
        expect(calc.divide(1, 3)).toBe(0.33);
        expect(calc.divide(2, 3)).toBe(0.67);
        expect(calc.multiply(1.999, 1.999)).toBe(4.00);
      });
    });
  });