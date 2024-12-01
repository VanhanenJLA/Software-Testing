import add from '../library/src/add.js';

describe('Tests for add.js', () => {
  test('should add two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('should add a negative and a positive number', () => {
    expect(add(-5, 8)).toBe(3);
  });

  test('should return the single number if the other argument is undefined', () => {
    expect(add(5, undefined)).toBe(5);
  });

  test('should return 0 if both arguments are undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
  });

  test('should return 0 if both arguments are null', () => {
    expect(add(null, null)).toBe(0);
  });

  test('should handle null and a number', () => {
    expect(add(null, 7)).toBe(7);
  });

  test('should add two decimal numbers', () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8, 3);
  });

  test('should handle large numbers', () => {
    expect(add(1e10, 1e10)).toBe(2e10);
  });

  test('should concatenate strings if one of the arguments is a string', () => {
    expect(add('6', 4)).toBe('64');
  });

  test('should concatenate strings if both arguments are strings', () => {
    expect(add('6', '4')).toBe('64');
  });

  test('should return NaN when adding a symbol', () => {
    expect(add(Symbol('x'), 5)).toBeNaN();
  });

  test('should return NaN when adding an object', () => {
    expect(add({}, 5)).toBeNaN();
  });

  test('should return NaN when adding an array', () => {
    expect(add([1, 2], 5)).toBeNaN();
  });

  test('should handle mixed inputs with valid and invalid types', () => {
    expect(add('12', null)).toBe('12null');
    expect(add(null, '34')).toBe('null34');
  });

  test('should handle empty strings as concatenated strings', () => {
    expect(add('', 5)).toBe('5'); // Päivitetty testin odotus
    expect(add('', '')).toBe(''); // Tyhjien merkkijonojen yhdistäminen
  });

  test('should handle boolean values correctly', () => {
    expect(add(true, 5)).toBe(6); // true -> 1
    expect(add(false, 5)).toBe(5); // false -> 0
  });

  test('should add a number and a string representing a number', () => {
    expect(add(5, '10')).toBe('510');
    expect(add('10', 5)).toBe('105');
  });

  test('should return the second operand when adding undefined and invalid types', () => {
    const testSymbol = Symbol('x');
    expect(add(undefined, testSymbol)).toBe(testSymbol);
  });

  test('should handle Infinity values correctly', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
    expect(add(Infinity, -Infinity)).toBeNaN();
  });

  test('should handle edge cases with special number values', () => {
    expect(add(NaN, 5)).toBeNaN();
    expect(add(0, -0)).toBe(0); // JavaScript specific edge case
  });
});
