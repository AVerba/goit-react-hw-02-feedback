import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from './Container';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackHandler = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
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
    const { good, neutral, bad } = this.state;
    const key = Object.keys(this.state);
    const PositiveFeedbackPercent = this.countPositiveFeedbackPercentage();
    return (
      <Container className="feedBack">
        <Section className="Options">
          <FeedbackOptions
            options={key}
            feedbackHandler={this.feedbackHandler}
          ></FeedbackOptions>
        </Section>
        <Section className="Statictic">
          <Statistic
            good={good}
            bad={bad}
            neutral={neutral}
            positivePercentage={PositiveFeedbackPercent}
          ></Statistic>
        </Section>
      </Container>
    );
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
