const digit2BCD = (digit) => {
  if (digit === 1) { return [0, 0, 0, 1]; }
  if (digit === 2) { return [0, 0, 1, 0]; }
  if (digit === 3) { return [0, 0, 1, 1]; }
  if (digit === 4) { return [0, 1, 0, 0]; }
  if (digit === 5) { return [0, 1, 0, 1]; }
  if (digit === 6) { return [0, 1, 1, 0]; }
  if (digit === 7) { return [0, 1, 1, 1]; }
  if (digit === 8) { return [1, 0, 0, 0]; }
  if (digit === 9) { return [1, 0, 0, 1]; }
  return [0, 0, 0, 0];
};

module.exports = digit2BCD;
