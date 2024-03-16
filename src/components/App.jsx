import { useEffect, useState } from "react";
import Description from "./Description/Description";
// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const Options = ({ handleResetFeedback, updateFeedback }) => {
  return (
    <div className="feedback-buttons">
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      <button onClick={handleResetFeedback}>Reset</button>
    </div>
  );
};

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className="feedback-stats">
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    const stringifiedFeedback = localStorage.getItem("feedback");
    const parsedFeedback = JSON.parse(stringifiedFeedback) ?? initialFeedback;
    return parsedFeedback;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedbackPercentage =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={CSS.app}>
      <Description />

      <Options
        handleResetFeedback={handleResetFeedback}
        updateFeedback={updateFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
