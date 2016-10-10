const digit2BCD = require('./digit-2-bcd');

const time2BCDs = time => (
  [].concat(...time.split(':')
    .map(part => (part.split('')
      .map(digit => (digit2BCD(parseInt(digit, 0))))
    ))
  )
);

module.exports = time2BCDs;
