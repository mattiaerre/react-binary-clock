const chai = require('chai');
const digit2BCD = require('../src/digit-2-bcd');

chai.should();

const scenarios = [
  { digit: 0, BCD: [0, 0, 0, 0] },
  { digit: 1, BCD: [0, 0, 0, 1] },
  { digit: 2, BCD: [0, 0, 1, 0] },
  { digit: 3, BCD: [0, 0, 1, 1] },
  { digit: 4, BCD: [0, 1, 0, 0] },
  { digit: 5, BCD: [0, 1, 0, 1] },
  { digit: 6, BCD: [0, 1, 1, 0] },
  { digit: 7, BCD: [0, 1, 1, 1] },
  { digit: 8, BCD: [1, 0, 0, 0] },
  { digit: 9, BCD: [1, 0, 0, 1] }
];

scenarios.forEach((scenario) => {
  describe(`digit2BCD(${scenario.digit})`, () => {
    it(`should equal ${scenario.BCD}`, () => {
      digit2BCD(scenario.digit).should.deep.equal(scenario.BCD);
    });
  });
});
