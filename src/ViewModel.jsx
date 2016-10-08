import React from 'react';
import View from './View.jsx';

const pad = number => (`00${number}`.slice(-2));

const makeTime = () => {
  const date = new Date();
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

class ViewModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: makeTime() };
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({ time: makeTime() });
  }

  render() {
    return (
      <View time={this.state.time} />
    );
  }
}

export default ViewModel;
