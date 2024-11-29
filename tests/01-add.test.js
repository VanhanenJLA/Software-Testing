import { describe, it } from 'mocha';
import { expect } from 'chai';
import add from '../library/src/add.js';

describe('Tests for add.js', () => {
  it('should add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('should add a negative and a positive number', () => {
    expect(add(-5, 8)).to.equal(3);
  });

  it('should return the single number if the other argument is undefined', () => {
    expect(add(5, undefined)).to.equal(5);
  });

  it('should return 0 if both arguments are undefined', () => {
    expect(add(undefined, undefined)).to.equal(0);
  });

  it('should return 0 if both arguments are null', () => {
    expect(add(null, null)).to.equal(0);
  });

  it('should handle null and a number', () => {
    expect(add(null, 7)).to.equal(7);
  });

  it('should add two decimal numbers', () => {
    expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.001);
  });

  it('should handle large numbers', () => {
    expect(add(1e10, 1e10)).to.equal(2e10);
  });

  it('should concatenate strings if one of the arguments is a string', () => {
    expect(add('6', 4)).to.equal('64');
  });

  it('should concatenate strings if both arguments are strings', () => {
    expect(add('6', '4')).to.equal('64');
  });

  it('should return NaN when adding a symbol', () => {
    expect(add(Symbol('x'), 5)).to.be.NaN;
  });

  it('should return NaN when adding an object', () => {
    expect(add({}, 5)).to.be.NaN;
  });

  it('should return NaN when adding an array', () => {
    expect(add([1, 2], 5)).to.be.NaN;
  });

  it('should handle mixed inputs with valid and invalid types', () => {
    expect(add('12', null)).to.equal('12null');
    expect(add(null, '34')).to.equal('null34');
  });

  it('should handle empty strings as concatenated strings', () => {
    expect(add('', 5)).to.equal('5'); // Päivitetty testin odotus
    expect(add('', '')).to.equal(''); // Tyhjien merkkijonojen yhdistäminen
  });  

  it('should handle boolean values correctly', () => {
    expect(add(true, 5)).to.equal(6); // true -> 1
    expect(add(false, 5)).to.equal(5); // false -> 0
  });

  it('should add a number and a string representing a number', () => {
    expect(add(5, '10')).to.equal('510');
    expect(add('10', 5)).to.equal('105');
  });

  it('should return the second operand when adding undefined and invalid types', () => {
    const testSymbol = Symbol('x');
    expect(add(undefined, testSymbol)).to.equal(testSymbol);
  });
  
  

  it('should handle Infinity values correctly', () => {
    expect(add(Infinity, 1)).to.equal(Infinity);
    expect(add(-Infinity, 1)).to.equal(-Infinity);
    expect(add(Infinity, -Infinity)).to.be.NaN;
  });

  it('should handle edge cases with special number values', () => {
    expect(add(NaN, 5)).to.be.NaN;
    expect(add(0, -0)).to.equal(0); // JavaScript specific edge case
  });
});
