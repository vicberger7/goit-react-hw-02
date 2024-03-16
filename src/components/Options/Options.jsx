const Options = ({ handleResetFeedback, updateFeedback }) => {
  return (
    <div className="feedback-buttons">
      <button onClick={() => updateFeedback("Good")}>Good</button>
      <button onClick={() => updateFeedback("Neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("Bad")}>Bad</button>
      <button onClick={handleResetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
