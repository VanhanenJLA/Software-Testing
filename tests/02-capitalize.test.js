import capitalize from '../library/src/capitalize.js';

describe('Tests for capitalize.js', () => {
  test('should capitalize a fully lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should capitalize a fully uppercase string', () => {
    expect(capitalize('WORLD')).toBe('World');
  });

  test('should capitalize a mixed-case string', () => {
    expect(capitalize('jAvAsCrIpT')).toBe('Javascript');
  });

  test('should return an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle null input by returning the string "Null"', () => {
    expect(capitalize(null)).toBe('Null');
  });

  test('should handle undefined input by returning the string "Undefined"', () => {
    expect(capitalize(undefined)).toBe('Undefined');
  });

  test('should capitalize numeric input converted to string', () => {
    expect(capitalize(123)).toBe('123');
  });

  test('should capitalize a boolean true converted to string', () => {
    expect(capitalize(true)).toBe('True');
  });

  test('should capitalize a boolean false converted to string', () => {
    expect(capitalize(false)).toBe('False');
  });

  test('should handle strings with leading spaces', () => {
    expect(capitalize('   test')).toBe('   test');
  });

  test('should handle strings with trailing spaces', () => {
    expect(capitalize('example   ')).toBe('Example   ');
  });

  test('should handle strings with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });

  test('should handle strings with numbers and letters', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });

  test('should capitalize strings with Unicode characters', () => {
    expect(capitalize('über')).toBe('Über');
  });

  test('should handle strings with emoji characters', () => {
    expect(capitalize('😊happy')).toBe('😊happy');
  });
});
