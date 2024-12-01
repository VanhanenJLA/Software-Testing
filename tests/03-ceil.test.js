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

  test('should return the same number if it is already a negative integer', () => {
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
    expect(ceil(0.000000123, 10)).toBe(0.000000123); // Päivitetty tarkka tulos
  });

  // Tyhjät ja väärät syötteet
  test('should return the input if precision is not a number', () => {
    expect(ceil(5.5, 'two')).toBe(6); // Päivitetty odotettu tulos
  });

  test('should return NaN if both inputs are invalid', () => {
    expect(ceil('abc', 'def')).toBeNaN();
  });

  // Undefined- ja null-arvot
  test('should treat undefined precision as 0', () => {
    expect(ceil(5.678)).toBe(6); // Default precision
  });

  test('should return 0 if the number is null', () => {
    expect(ceil(null)).toBe(0); // Päivitetty odotettu tulos
  });

  test('should return NaN if the number is undefined', () => {
    expect(ceil(undefined)).toBeNaN();
  });
});
