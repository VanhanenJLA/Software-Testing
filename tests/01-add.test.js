import add from '../library/src/add.js';

describe('Tests for add.js', () => {
  // Peruskäyttötapaukset
  test('should add two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('should add a positive and a negative number', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(add(-3, -7)).toBe(-10);
  });

  // Reunatapaukset
  test('should return the single number if the other is undefined', () => {
    expect(add(5, undefined)).toBe(5);
    expect(add(undefined, 7)).toBe(7);
  });

  test('should return the default value (0) if both numbers are undefined', () => {
    expect(add(undefined, undefined)).toBe(0);
  });

  // Merkkijonojen käsittely
  test('should concatenate strings if one of the arguments is a string', () => {
    expect(add('6', 4)).toBe('64');
    expect(add(4, '6')).toBe('46');
  });

  test('should concatenate strings if both arguments are strings', () => {
    expect(add('hello', 'world')).toBe('helloworld');
  });

  // Desimaalit
  test('should add two decimal numbers', () => {
    expect(add(1.5, 2.3)).toBe(3.8);
  });

  test('should handle mixed integers and decimals', () => {
    expect(add(2, 2.5)).toBe(4.5);
  });

  // Infinity-tapaukset
  test('should handle Infinity correctly', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
    expect(add(Infinity, -Infinity)).toBeNaN(); // Infinity + (-Infinity) is NaN
  });

  // Muut tyypit
  test('should convert booleans to numbers and add them', () => {
    expect(add(true, 2)).toBe(3); // true -> 1
    expect(add(false, 2)).toBe(2); // false -> 0
  });

  test('should return NaN when adding symbols', () => {
    expect(add(Symbol('x'), 5)).toBeNaN();
  });

  test('should return NaN when adding objects', () => {
    expect(add({}, 5)).toBeNaN();
  });

  test('should return NaN when adding arrays', () => {
    expect(add([1, 2], 5)).toBeNaN();
  });

  // Erikoistapaukset
  test('should handle empty strings as 0', () => {
    expect(add('', 5)).toBe('5');
    expect(add('', '')).toBe('');
  });

  test('should handle null values correctly', () => {
    expect(add(null, 7)).toBe(7);
    expect(add(null, null)).toBe(0);
  });

  // test('should return the second operand when adding undefined and invalid types', () => {
  //   const testSymbol = Symbol('x');
  //   expect(add(undefined, testSymbol)).toBe(testSymbol.toString());
  // });
});
