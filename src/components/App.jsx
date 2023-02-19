import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';
import { Notification } from './Feedback/Notification';
import { Container } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positiveFeedback = Math.round((good / total) * 100);

  function onClickBtn(evt) {
    switch (evt.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

  return (
    <Container>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={onClickBtn}
      />

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          className="isVisible"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      )}
    </Container>
  );
}
