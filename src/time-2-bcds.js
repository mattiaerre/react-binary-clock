const digit2BCD = require('./digit-2-bcd');

const time2BCDs = (time) => {
  // todo: add guard clause against bad time format (HH:mm:ss)
  const bcds = [];
  time.split(':').forEach((part) => {
    part.split('').forEach((digit) => {
      const bcd = digit2BCD(parseInt(digit, 0));
      bcds.push(bcd);
    });
  });
  return bcds;
};

module.exports = time2BCDs;
