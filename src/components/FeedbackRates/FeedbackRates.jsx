import React from 'react';
import { RateList, Button } from './FeedbackRates.styled';

function FeedbackRates({ onLeaveFeedback }) {
  return (
    <div>
      <RateList>
        <li>
          <Button name="good" onClick={onLeaveFeedback}>
            Good
          </Button>
        </li>
        <li>
          <Button name="neutral" onClick={onLeaveFeedback}>
            Neutral
          </Button>
        </li>
        <li>
          <Button name="bad" onClick={onLeaveFeedback}>
            Bad
          </Button>
        </li>
      </RateList>
    </div>
  );
}

export default FeedbackRates;
