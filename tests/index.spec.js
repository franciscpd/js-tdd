import { expect } from 'chai';
import * as calc from '../src';

describe('Index', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });

    it('should exist sum function', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist sub function', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
  });
});
