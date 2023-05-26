import React, { useState } from 'react';
import FeedbackRates from '../FeedbackRates/FeedbackRates';
import Statistics from '../Statistics/RateStatistics';
import Title from '../Title/Title';
import Notification from '../EmptyNotification/EmptyNotification';
import { Section } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleReviewClick = event => {
    const type = event.target.name;
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const positivePercentage = () => {
    if (good === 0) {
      return 0;
    }
    return ((good / countTotalFeedback()) * 100).toFixed(1);
  };

  return (
    <Section>
      <Title title={'Feedback'}>
        <FeedbackRates onLeaveFeedback={handleReviewClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positivePercentage={positivePercentage()}
        >
          <Notification message="There is no feedback" />
        </Statistics>
      </Title>
    </Section>
  );
};

export default App;
