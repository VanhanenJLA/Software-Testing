import chunk from '../library/src/chunk.js';

describe('Tests for chunk.js', () => {
  // Peruskäyttötapaukset
  test('should split an array into chunks of specified size', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('should handle arrays that cannot be split evenly', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  test('should return the whole array as a single chunk if size is greater than array length', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 5)).toEqual([['a', 'b', 'c']]);
  });

  // Reunatapaukset
  test('should return an empty array if size is 0', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 0)).toEqual([]);
  });

  test('should return an empty array if size is negative', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, -1)).toEqual([]);
  });

  test('should return an empty array if input array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should handle a null or undefined input array gracefully', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  // Oletusarvoinen koko
  test('should split array into chunks of size 1 by default', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array)).toEqual([['a'], ['b'], ['c']]);
  });

  // Erikoistapaukset
  test('should treat size as an integer even if given a float', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(chunk(array, 2.5)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('should treat size as 0 if not a valid number', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 'invalid')).toEqual([]);
    expect(chunk(array, NaN)).toEqual([]);
  });

  // Suuret syötteet
  test('should handle large arrays efficiently', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    const chunked = chunk(largeArray, 100);
    expect(chunked.length).toBe(10);
    expect(chunked[0].length).toBe(100);
    expect(chunked[9].length).toBe(100);
  });
});
