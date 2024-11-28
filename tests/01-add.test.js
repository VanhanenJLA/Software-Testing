import { describe, it } from 'mocha';
import { expect } from 'chai'
import add from '../library/src/add.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should add a negative and a positive number', () => {
    const result = add(-5, 8);
    expect(result).to.equal(3);
  });

  it('should return the single number if the other argument is undefined', () => {
    const result = add(5, undefined);
    expect(result).to.equal(5);
  });

  it('should return the other number if the first argument is undefined', () => {
    const result = add(undefined, 7);
    expect(result).to.equal(7);
  });

  it('should return 0 if both arguments are undefined', () => {
    const result = add(undefined, undefined);
    expect(result).to.equal(0);
  });

  it('should concatenate strings when one or both arguments are strings', () => {
    const result = add('6', '4');
    expect(result).to.equal('64');
  });

  it('should add numbers even when they are in string form', () => {
    const result = add('6', 4);
    expect(result).to.equal('64');
  });

  it('should return NaN when adding a symbol', () => {
    const result = add(Symbol('x'), 5);
    expect(result).to.be.NaN;
  });
});
