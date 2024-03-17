import { useEffect, useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import css from "./App.module.css";

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
    <div className={css.app}>
      <Description />

      <Options
        total={totalFeedback}
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
