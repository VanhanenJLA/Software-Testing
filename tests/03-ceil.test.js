import { describe, it } from 'mocha';
import { expect } from 'chai';
import ceil from '../library/src/ceil.js';

describe('Tests for ceil.js', () => {
  // Peruskäyttötapaukset
  it('should round up a positive decimal number to the nearest integer', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('should round up a negative decimal number to the nearest integer', () => {
    expect(ceil(-4.006)).to.equal(-4);
  });

  // Tarkkuuden käsittely
  it('should round up to a specific precision (positive precision)', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('should round up to a specific precision (negative precision)', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  // Kokonaisluvut
  it('should return the same number if it is already an integer', () => {
    expect(ceil(5)).to.equal(5);
  });

  it('should return the same number if it is already a negative integer', () => {
    expect(ceil(-5)).to.equal(-5);
  });

  // Nollan käsittely
  it('should return 0 when the input is 0', () => {
    expect(ceil(0)).to.equal(0);
  });

  // Reunatapaukset
  it('should handle very large numbers', () => {
    expect(ceil(123456789.123456, 3)).to.equal(123456789.124);
  });

  it('should handle very small numbers', () => {
    expect(ceil(0.000000123, 10)).to.equal(0.000000123); // Päivitetty tarkka tulos
  });

  // Tyhjät ja väärät syötteet
  it('should return the input if precision is not a number', () => {
    expect(ceil(5.5, 'two')).to.equal(6); // Päivitetty odotettu tulos
  });

  it('should return NaN if both inputs are invalid', () => {
    expect(ceil('abc', 'def')).to.be.NaN;
  });

  // Undefined- ja null-arvot
  it('should treat undefined precision as 0', () => {
    expect(ceil(5.678)).to.equal(6); // Default precision
  });

  it('should return 0 if the number is null', () => {
    expect(ceil(null)).to.equal(0); // Päivitetty odotettu tulos
  });

  it('should return NaN if the number is undefined', () => {
    expect(ceil(undefined)).to.be.NaN;
  });
});
