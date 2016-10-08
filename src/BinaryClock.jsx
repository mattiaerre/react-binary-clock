import React, { PropTypes } from 'react';

const BinaryClock = (props) => (
  <div className={props.className ? props.className : 'binary-clock' }>
    YO!
  </div>
);

BinaryClock.propTypes = {
  className: PropTypes.string
};

export default BinaryClock;
