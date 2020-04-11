import { expect } from 'chai';
import * as calc from '../src';

describe('Index', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });
  });
});
