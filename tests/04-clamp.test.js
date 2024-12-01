import clamp from '../library/src/clamp.js';

describe('Tests for clamp.js', () => {
  // Peruskäyttötapaukset
  test('should clamp a number within the bounds (within range)', () => {
    expect(clamp(3, 0, 5)).toBe(3);
  });

  test('should clamp a number to the lower bound', () => {
    expect(clamp(-10, 0, 5)).toBe(0);
  });

  test('should clamp a number to the upper bound', () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  // Reunatapaukset
  test('should return the number if it equals the lower bound', () => {
    expect(clamp(0, 0, 5)).toBe(0);
  });

  test('should return the number if it equals the upper bound', () => {
    expect(clamp(5, 0, 5)).toBe(5);
  });

  // Negatiiviset rajat
  test('should clamp a negative number within negative bounds', () => {
    expect(clamp(-3, -10, -2)).toBe(-3);
  });

  test('should clamp a number to a negative lower bound', () => {
    expect(clamp(-15, -10, -2)).toBe(-10);
  });

  test('should clamp a number to a negative upper bound', () => {
    expect(clamp(0, -10, -2)).toBe(-2);
  });

  // Sekalaiset tapaukset
  test('should return NaN if the number is NaN', () => {
    expect(clamp(NaN, 0, 5)).toBeNaN();
  });

  test('should handle undefined lower bound as 0', () => {
    expect(clamp(3, undefined, 5)).toBe(5); // Default lower is 0
  });

  test('should handle undefined upper bound as 0', () => {
    expect(clamp(-3, -5, undefined)).toBe(-5); // Default upper is 0
  });

  test('should handle null lower and upper bounds as 0', () => {
    expect(clamp(3, null, null)).toBe(0); // Default both bounds to 0
  });

  test('should handle Infinity as upper bound', () => {
    expect(clamp(100, 0, Infinity)).toBe(100);
  });

  test('should handle -Infinity as lower bound', () => {
    expect(clamp(-100, -Infinity, 0)).toBe(-100);
  });

  test('should handle mixed Infinity bounds', () => {
    expect(clamp(100, -Infinity, Infinity)).toBe(100);
  });

  // Virheelliset syötteet
  test('should handle string inputs and convert them to numbers', () => {
    expect(clamp('3', '0', '5')).toBe(5);
  });

  test('should return NaN for completely invalid inputs', () => {
    expect(clamp('abc', 'def', 'ghi')).toBeNaN();
  });

  // Erityistapaukset
  test('should return 0 if all inputs are 0', () => {
    expect(clamp(0, 0, 0)).toBe(0);
  });

  test('should handle numbers with decimals', () => {
    expect(clamp(3.5, 0, 5)).toBe(5);
  });
});
