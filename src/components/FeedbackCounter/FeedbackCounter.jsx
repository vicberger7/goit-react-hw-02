const FeedbackCounter = ({ handleLogFeedback }) => {
  return (
    <div>
      <button onClick={() => handleLogFeedback("Good")}>Good</button>
      <button onClick={() => handleLogFeedback("Neutral")}>Neutral</button>
      <button onClick={() => handleLogFeedback("Bad")}>Bad</button>
    </div>
  );
};

export default FeedbackCounter;
