import ceil from '../library/src/ceil.js';

describe('Tests for ceil.js', () => {
  // Peruskäyttötapaukset
  test('should round up a positive decimal number to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('should round up a negative decimal number to the nearest integer', () => {
    expect(ceil(-4.006)).toBe(-4);
  });

  // Tarkkuuden käsittely
  test('should round up to a specific precision (positive precision)', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test('should round up to a specific precision (negative precision)', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  // Kokonaisluvut
  test('should return the same number if it is already an integer', () => {
    expect(ceil(5)).toBe(5);
  });

  test('should return the same number if it is a negative integer', () => {
    expect(ceil(-5)).toBe(-5);
  });

  // Nollan käsittely
  test('should return 0 when the input is 0', () => {
    expect(ceil(0)).toBe(0);
  });

  // Reunatapaukset
  test('should handle very large numbers', () => {
    expect(ceil(123456789.123456, 3)).toBe(123456789.124);
  });

  test('should handle very small numbers', () => {
    expect(ceil(0.000000123, 10)).toBe(0.000000123); // Tarkka tulos
  });

  // Infinity-tapaukset
  test('should handle positive Infinity', () => {
    expect(ceil(Infinity)).toBe(Infinity);
  });

  test('should handle negative Infinity', () => {
    expect(ceil(-Infinity)).toBe(-Infinity);
  });

  // Merkkijonot ja muut tyypit
  test('should return NaN if input is NaN', () => {
    expect(ceil(NaN)).toBeNaN();
  });

  test('should handle string inputs by converting them to numbers', () => {
    expect(ceil('4.006')).toBe(5);
  });

  test('should return NaN if string input is not a number', () => {
    expect(ceil('abc')).toBeNaN();
  });

  // Booleanit
  test('should treat true as 1 and false as 0', () => {
    expect(ceil(true)).toBe(1);
    expect(ceil(false)).toBe(0);
  });

  // Null ja undefined
  test('should treat null as 0', () => {
    expect(ceil(null)).toBe(0);
  });

  test('should return NaN if input is undefined', () => {
    expect(ceil(undefined)).toBeNaN();
  });

  // Erikoistapaukset
  test('should handle negative precision rounding for decimals', () => {
    expect(ceil(45.95, -1)).toBe(50);
  });

  test('should handle large precision values', () => {
    expect(ceil(1.23456789, 292)).toBe(1.23456789);
  });

  test('should handle invalid precision values as 0', () => {
    expect(ceil(4.006, 'abc')).toBe(5);
  });
});
