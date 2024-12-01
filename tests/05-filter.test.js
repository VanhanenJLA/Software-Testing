import filter from '../library/src/filter.js';

describe('Tests for filter.js', () => {
  // Peruskäyttötapaukset
  test('should filter elements based on a predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, (value) => value % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test.skip('should return an empty array if no elements match the predicate', () => {
    const array = [1, 3, 5];
    const result = filter(array, (value) => value % 2 === 0);
    expect(result).toEqual([]);
  });

  // Tyhjät ja virheelliset syötteet
  test.skip('should return an empty array if input array is null', () => {
    expect(filter(null, () => true)).toEqual([]);
  });

  test.skip('should return an empty array if input array is undefined', () => {
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test.skip('should return an empty array if input array is empty', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  // Erilaiset ehdot
  test('should filter objects in an array based on a property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true },
    ]);
  });

  test('should filter strings in an array based on length', () => {
    const words = ['hello', 'hi', 'welcome', 'ok'];
    const result = filter(words, (word) => word.length > 2);
    expect(result).toEqual(['hello', 'welcome']);
  });

  // Predikaatti-funktiot
  test('should call predicate with value, index, and array', () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn((value) => value > 15);
    filter(array, mockPredicate);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
  });

  // Reunatapaukset
  test('should return all elements if predicate always returns true', () => {
    const array = [1, 2, 3, 4];
    const result = filter(array, () => true);
    expect(result).toEqual(array);
  });

  test.skip('should return an empty array if predicate always returns false', () => {
    const array = [1, 2, 3, 4];
    const result = filter(array, () => false);
    expect(result).toEqual([]);
  });

  // Ei-funktionaaliset syötteet
  test('should throw an error if predicate is not a function', () => {
    const array = [1, 2, 3];
    expect(() => filter(array, null)).toThrow(TypeError);
    expect(() => filter(array, undefined)).toThrow(TypeError);
    expect(() => filter(array, 'not a function')).toThrow(TypeError);
  });
});
