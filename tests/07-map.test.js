import map from '../library/src/map.js';

describe('Tests for map.js', () => {
  // Peruskäyttötapaukset
  test('should map values to their squared values', () => {
    const square = (n) => n * n;
    const array = [2, 3, 4];
    expect(map(array, square)).toEqual([4, 9, 16]);
  });

  test('should map string values to their uppercase forms', () => {
    const toUpperCase = (str) => str.toUpperCase();
    const array = ['a', 'b', 'c'];
    expect(map(array, toUpperCase)).toEqual(['A', 'B', 'C']);
  });

  // Tyhjät syötteet
  test('should return an empty array for a null input array', () => {
    expect(map(null, (x) => x)).toEqual([]);
  });

  test('should return an empty array for an undefined input array', () => {
    expect(map(undefined, (x) => x)).toEqual([]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(map([], (x) => x)).toEqual([]);
  });

  // Predikaatti-funktion tarkistus
  test('should call iteratee with value, index, and array', () => {
    const mockIteratee = jest.fn((value) => value * 2);
    const array = [1, 2, 3];
    map(array, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledWith(1, 0, array);
    expect(mockIteratee).toHaveBeenCalledWith(2, 1, array);
    expect(mockIteratee).toHaveBeenCalledWith(3, 2, array);
  });

  // Reunatapaukset
  test('should handle non-numeric values correctly', () => {
    const array = ['a', null, undefined, {}, []];
    const identity = (x) => x;
    expect(map(array, identity)).toEqual(['a', null, undefined, {}, []]);
  });

  test('should handle mixed data types correctly', () => {
    const array = [1, 'a', true, null];
    const toString = (x) => String(x);
    expect(map(array, toString)).toEqual(['1', 'a', 'true', 'null']);
  });

  // Virheelliset syötteet
  test('should throw an error if iteratee is not a function', () => {
    const array = [1, 2, 3];
    expect(() => map(array, null)).toThrow(TypeError);
    expect(() => map(array, undefined)).toThrow(TypeError);
    expect(() => map(array, 'not a function')).toThrow(TypeError);
  });

  // Erikoistapaukset
  test('should return a new array instance, not modify the original array', () => {
    const array = [1, 2, 3];
    const double = (x) => x * 2;
    const result = map(array, double);
    expect(result).toEqual([2, 4, 6]);
    expect(array).toEqual([1, 2, 3]); // Original array remains unchanged
  });

  test('should handle large arrays efficiently', () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
    const double = (x) => x * 2;
    const result = map(largeArray, double);
    expect(result[0]).toBe(0);
    expect(result[999999]).toBe(1999998);
  });
});
