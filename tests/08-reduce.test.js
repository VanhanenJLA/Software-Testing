import reduce from '../library/src/reduce.js';

describe('Tests for reduce.js', () => {
  // Peruskäyttötapaukset
  test('should sum up numbers in an array', () => {
    const array = [1, 2, 3, 4];
    const sum = (acc, value) => acc + value;
    expect(reduce(array, sum, 0)).toBe(10);
  });

  test('should multiply numbers in an array', () => {
    const array = [1, 2, 3, 4];
    const multiply = (acc, value) => acc * value;
    expect(reduce(array, multiply, 1)).toBe(24);
  });

  // Objektien käsittely
  test('should reduce an object to a new object grouping keys by values', () => {
    const obj = { a: 1, b: 2, c: 1 };
    const groupByValue = (result, value, key) => {
      if (!result[value]) result[value] = [];
      result[value].push(key);
      return result;
    };
    expect(reduce(obj, groupByValue, {})).toEqual({
      1: ['a', 'c'],
      2: ['b'],
    });
  });

  // Tyhjät ja virheelliset syötteet
  test('should return the initial accumulator for an empty array', () => {
    expect(reduce([], (acc) => acc, 10)).toBe(10);
  });

  test('should return the initial accumulator for an empty object', () => {
    expect(reduce({}, (acc) => acc, 'initial')).toBe('initial');
  });

  test('should return undefined if no accumulator is provided and collection is empty', () => {
    expect(reduce([], (acc) => acc)).toBeUndefined();
    expect(reduce({}, (acc) => acc)).toBeUndefined();
  });

  test('should handle null and undefined collections gracefully', () => {
    const sum = (acc, value) => acc + value;
    expect(reduce(null, sum, 0)).toBe(0);
    expect(reduce(undefined, sum, 0)).toBe(0);
  });

  // Oletusarvoinen akkumulaattori
  test('should use the first element of the array as the initial accumulator if not provided', () => {
    const array = [1, 2, 3];
    const sum = (acc, value) => acc + value;
    expect(reduce(array, sum)).toBe(6); // 1 + 2 + 3
  });

  test('should use the first property value of the object as the initial accumulator if not provided', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const sum = (acc, value) => acc + value;
    expect(reduce(obj, sum)).toBe(6); // 1 + 2 + 3
  });

  // Reunatapaukset
  test('should handle non-numeric values in arrays', () => {
    const array = ['a', 'b', 'c'];
    const concat = (acc, value) => acc + value;
    expect(reduce(array, concat, '')).toBe('abc');
  });

  test('should reduce an array to a single nested structure', () => {
    const array = [1, 2, 3];
    const nest = (acc, value) => ({ value, rest: acc });
    expect(reduce(array, nest, null)).toEqual({
      value: 3,
      rest: { value: 2, rest: { value: 1, rest: null } },
    });
  });

  // Virheelliset syötteet
  test('should throw an error if iteratee is not a function', () => {
    const array = [1, 2, 3];
    expect(() => reduce(array, null, 0)).toThrow(TypeError);
    expect(() => reduce(array, undefined, 0)).toThrow(TypeError);
    expect(() => reduce(array, 'not a function', 0)).toThrow(TypeError);
  });
});
