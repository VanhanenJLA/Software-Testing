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

  it('should concatenate strings if one of the arguments is strings', () => {
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
});
