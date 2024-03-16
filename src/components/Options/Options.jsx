import css from "./Options.module.css";
const Options = ({ handleResetFeedback, updateFeedback }) => {
  return (
    <div className={css.feedbackbtns}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={handleResetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
