import isEmpty from '../library/src/isEmpty.js';

describe('Tests for isEmpty.js', () => {
  // Null ja undefined
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  // Booleanit ja numerot
  test('should return true for primitive values like booleans and numbers', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(42)).toBe(true);
  });

  // Tyhjät ja ei-tyhjät taulukot
  test('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Tyhjät ja ei-tyhjät merkkijonot
  test('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  // Tyhjät ja ei-tyhjät objektit
  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  // Prototyypit
  test('should return true for empty prototypes', () => {
    function Test() {}
    Test.prototype.a = 1;
    const obj = new Test();
    expect(isEmpty(obj)).toBe(true);
  });

  // Map ja Set
  test('should return true for empty Map and Set', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty Map and Set', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  // TypedArray
  test('should return true for empty TypedArrays', () => {
    expect(isEmpty(new Int8Array())).toBe(true);
  });

  test('should return false for non-empty TypedArrays', () => {
    expect(isEmpty(new Int8Array([1, 2, 3]))).toBe(false);
  });

  // Buffers
  test('should return true for empty Buffers', () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).toBe(true);
  });

  test('should return false for non-empty Buffers', () => {
    const buffer = Buffer.from([1, 2, 3]);
    expect(isEmpty(buffer)).toBe(false);
  });

  // Erikoistapaukset
  test('should handle functions as empty', () => {
    function testFunc() {}
    expect(isEmpty(testFunc)).toBe(true);
  });

  test('should handle numbers and strings with array-like methods as non-empty', () => {
    const arrayLike = { length: 1, 0: 'test' };
    expect(isEmpty(arrayLike)).toBe(false);
  });

  test('should handle objects with non-enumerable properties as empty', () => {
    const obj = Object.create(null);
    Object.defineProperty(obj, 'hidden', { value: 1, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });
});
