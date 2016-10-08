const chai = require('chai');
const time2BCDs = require('./time-2-bcds');

chai.should();

const scenarios = [
  { time: '16:03:24', BCDs: [[0, 0, 0, 1], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 1, 1], [0, 0, 1, 0], [0, 1, 0, 0]] },
  { time: '21:45:07', BCDs: [[0, 0, 1, 0], [0, 0, 0, 1], [0, 1, 0, 0], [0, 1, 0, 1], [0, 0, 0, 0], [0, 1, 1, 1]] },
  { time: '08:33:59', BCDs: [[0, 0, 0, 0], [1, 0, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1], [0, 1, 0, 1], [1, 0, 0, 1]] }
];

scenarios.forEach((scenario) => {
  describe(`time2BCDs(${scenario.time})`, () => {
    it(`should equal ${scenario.BCDs}`, () => {
      time2BCDs(scenario.time).should.deep.equal(scenario.BCDs);
    });
  });
});
