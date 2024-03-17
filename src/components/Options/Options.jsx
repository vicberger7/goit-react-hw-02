import css from "./Options.module.css";
const Options = ({ handleResetFeedback, updateFeedback, total }) => {
  return (
    <div className={css.feedbackbtns}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total !== 0 && <button onClick={handleResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
