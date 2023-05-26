import React from 'react';
import PropTypes from 'prop-types';
import { StatisticList } from './RateStatistics.styled';

function Statistics({
  good,
  bad,
  neutral,
  children,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      {totalFeedback === 0 ? (
        <>{children}</>
      ) : (
        <>
          <StatisticList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive Feedback: {positivePercentage}%</li>
          </StatisticList>
        </>
      )}
    </>
  );
}

Statistics.propTypes = {
  children: PropTypes.object,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
