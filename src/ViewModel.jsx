import React from 'react';
import moment from 'moment';
import View from './View.jsx';

class ViewModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().format('HH:mm:ss') };
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    const time = moment().format('HH:mm:ss');
    this.setState({ time });
  }

  render() {
    return (
      <View time={this.state.time} />
    );
  }
}

export default ViewModel;
