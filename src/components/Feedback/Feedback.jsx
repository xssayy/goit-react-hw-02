const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedbackPercantage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>

      <p>Positive: {positiveFeedbackPercantage}%</p>
    </div>
  );
};

export default Feedback;
