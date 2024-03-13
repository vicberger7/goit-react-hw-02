import { useState } from "react";
import FeedbackCounter from "./FeedbackCounter/FeedbackCounter";
import CafeName from "./CafeName/CafeName";
import FeedbackTotal from "./FeedbackTotal/FeedbackTotal";

const App = () => {
  const [feedback, setFeedback] = useState({ good: 3, neutral: 2, bad: 1 });



  const handleLogFeedback = (feedbackName) => {
    console.log("feedbackName: ", feedbackName);
    setFeedback(...feedback, [feedbackName]: feedback[feedbackName] + 1);
  };

  return (
    <div>
      <CafeName />
      <FeedbackCounter handleLogFeedback={handleLogFeedback} />
      <FeedbackTotal feedback={feedback} />
    </div>
  );
};

export default App;
