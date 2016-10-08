import React, { PropTypes } from 'react';
import time2BCDs from './time-2-bcds';

const BinaryClock = ({ time }) => {
  const bcds = time2BCDs(time);

  const rows = [];
  bcds.forEach((bcd) => {
    const row = [];
    bcd.forEach((bit) => {
      row.push(<div className="led"></div>);
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

// wake me up when September ends ... wait ... it's almost November :sweat_smile:
