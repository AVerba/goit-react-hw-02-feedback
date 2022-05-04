import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackHandler = event => {
    const key = event.target.key;
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const allGoals = this.countTotalFeedback();
    const positiveFeedback = Math.round((good * 100) / allGoals);
    return positiveFeedback;
  };

  render() {
    return <div>hello</div>;
  }
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  feedbackHandler: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
