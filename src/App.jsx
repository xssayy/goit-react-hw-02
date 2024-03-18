import { useState, useEffect } from "react";

import Desctiption from "./components/Description/Desctiption";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercantage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Desctiption />
      <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercantage={positiveFeedbackPercantage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
