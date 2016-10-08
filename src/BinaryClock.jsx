import React, { PropTypes } from 'react';
import time2BCDs from './time-2-bcds';

const BinaryClock = ({ time }) => {
  const bcds = time2BCDs(time);

  const rows = [];
  bcds.forEach((bcd) => {
    const row = [];
    bcd.forEach((bit) => {
      const ledClassName = `led ${bit === 0 ? 'off' : 'on'}`;
      row.push(<div className={ledClassName}></div>);
    });
    rows.push(<div className="row">{row}</div>);
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
