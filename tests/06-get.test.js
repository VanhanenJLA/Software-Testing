import get from '../library/src/get.js';

describe('Tests for get.js', () => {
  // Peruskäyttötapaukset
  test('should retrieve a value from a simple object path', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(get(obj, 'a')).toBe(1);
    expect(get(obj, 'b')).toBe(2);
    expect(get(obj, 'c')).toBe(3);
  });

  test('should retrieve a value from a nested object path', () => {
    const obj = { a: { b: { c: 3 } } };
    expect(get(obj, 'a.b.c')).toBe(3);
    expect(get(obj, ['a', 'b', 'c'])).toBe(3);
  });

  // Oletusarvojen käsittely
  test('should return the default value if the path does not exist', () => {
    const obj = { a: { b: { c: 3 } } };
    expect(get(obj, 'a.b.d', 'default')).toBe('default');
    expect(get(obj, ['a', 'b', 'd'], 'default')).toBe('default');
  });

  test('should return undefined if the path does not exist and no default value is provided', () => {
    const obj = { a: { b: { c: 3 } } };
    expect(get(obj, 'a.b.d')).toBeUndefined();
    expect(get(obj, ['a', 'b', 'd'])).toBeUndefined();
  });

  // Null ja undefined käsittely
  test('should return the default value for null or undefined object', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
    expect(get(undefined, 'a.b.c', 'default')).toBe('default');
  });

  // Taulukot
  test('should retrieve values from array paths', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(3);
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should handle invalid array indices gracefully', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[1].b.c', 'default')).toBe('default');
  });

  // Erikoistapaukset
  test('should handle empty path gracefully', () => {
    const obj = { a: { b: { c: 3 } } };
    expect(get(obj, '', 'default')).toBe('default');
    expect(get(obj, [])).toBe(obj);
  });

  test('should return the entire object if no path is provided', () => {
    const obj = { a: 1, b: 2 };
    expect(get(obj, undefined)).toBe(obj);
  });

  // Virheelliset polut
  test('should return the default value if path is not a string or array', () => {
    const obj = { a: 1 };
    expect(get(obj, 123, 'default')).toBe('default');
    expect(get(obj, null, 'default')).toBe('default');
    expect(get(obj, {}, 'default')).toBe('default');
  });

  // Ei-objektit
  test('should handle non-object inputs gracefully', () => {
    expect(get(123, 'a.b.c', 'default')).toBe('default');
    expect(get('string', 'a.b.c', 'default')).toBe('default');
  });

  // Reunatapaukset
  test('should retrieve values when path contains special characters', () => {
    const obj = { 'a.b': { c: 3 } };
    expect(get(obj, ['a.b', 'c'])).toBe(3);
  });
});
