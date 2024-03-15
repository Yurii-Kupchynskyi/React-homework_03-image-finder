import React, { Component } from 'react';
import { FlexBox } from 'components/Box';
import StatSection from './StatSection';
import FeedbackOptions from './FeedbackOptions';
import { Notification } from './Notification';

export class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  incrementValue = e => {
    const buttonText = e.target.innerText.toLowerCase();
    console.log('buttonText');

    this.setState(prevState => {
      const updatedState = {
        ...prevState,
        [buttonText]: prevState[buttonText] + 1,
        total: prevState.good + prevState.neutral + prevState.bad + 1,
      };

      const { good, total } = updatedState;
      const positivePercentage = total > 0 ? (good / total) * 100 : 0;

      return {
        ...updatedState,
        positivePercentage,
      };
    });
  };

  render() {
    const { total } = this.state;
    return (
      <FlexBox ml="2%" display="flex">
        <FeedbackOptions data={this.state} onStatChange={this.incrementValue} />

        {total ? (
          <StatSection data={this.state} />
        ) : (
          <Notification message="No info(" />
        )}
      </FlexBox>
    );
  }
}

export default Statistic;
