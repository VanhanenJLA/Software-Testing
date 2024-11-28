import { describe, it } from 'mocha';
import { expect } from 'chai';
import capitalize from '../library/src/capitalize.js';

describe('Tests for capitalize.js', () => {

  it('should capitalize a fully lowercase string', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should capitalize a fully uppercase string', () => {
    expect(capitalize('WORLD')).to.equal('World');
  });

  it('should capitalize a mixed-case string', () => {
    expect(capitalize('jAvAsCrIpT')).to.equal('Javascript');
  });

  it('should return an empty string when given an empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should handle null input by returning the string "Null"', () => {
    expect(capitalize(null)).to.equal('Null');
  });
  
  it('should handle undefined input by returning the string "Undefined"', () => {
    expect(capitalize(undefined)).to.equal('Undefined');
  });
  
  it('should capitalize numeric input converted to string', () => {
    expect(capitalize(123)).to.equal('123');
  });

  it('should capitalize a boolean true converted to string', () => {
    expect(capitalize(true)).to.equal('True');
  });

  it('should capitalize a boolean false converted to string', () => {
    expect(capitalize(false)).to.equal('False');
  });

  it('should handle strings with leading spaces', () => {
    expect(capitalize('   test')).to.equal('   test');
  });

  it('should handle strings with trailing spaces', () => {
    expect(capitalize('example   ')).to.equal('Example   ');
  });

  it('should handle strings with special characters', () => {
    expect(capitalize('!hello')).to.equal('!hello');
  });

  it('should handle strings with numbers and letters', () => {
    expect(capitalize('123abc')).to.equal('123abc');
  });

  it('should capitalize strings with Unicode characters', () => {
    expect(capitalize('über')).to.equal('Über');
  });

  it('should handle strings with emoji characters', () => {
    expect(capitalize('😊happy')).to.equal('😊happy');
  });
});
