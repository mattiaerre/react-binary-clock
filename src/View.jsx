import React, { PropTypes } from 'react';
import time2BCDs from './time-2-bcds';

const BinaryClock = ({ time }) => {
  const bcds = time2BCDs(time);

  const rows = [];
  bcds.forEach((bcd, i) => {
    const row = [];
    bcd.forEach((bit, j) => {
      const ledClassName = `led ${bit === 0 ? 'off' : 'on'}`;
      row.push(<div className={ledClassName} key={j}></div>);
    });
    rows.push(<div className="row" key={i}>{row}</div>);
  });

  return (
    <div className="binary-clock">
      {rows}
    </div>
  );
};

BinaryClock.propTypes = {
  time: PropTypes.string
};

export default BinaryClock;
