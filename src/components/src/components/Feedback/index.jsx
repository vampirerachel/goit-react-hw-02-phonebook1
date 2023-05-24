import { useState } from "react";
import styles from "./style.module.css";

export default function Feedback() {
 const [feedback, setFeedback] = useState({ Good: 0, Bad: 0, Neutral: 0 });

  function countTotalFeedback() {
    return feedback.Good + feedback.Bad + feedback.Neutral
  }

function countPositiveFeedbackPercentage() {
  const total = feedback.Good + feedback.Neutral + feedback.Bad;
  const positive = feedback.Good;
  return total === 0 ? 0 : Math.round((positive / total) * 100);
}

  function handleChange(event) {
    setFeedback(previous => {
      return { ...previous, [event.target.textContent]: previous[event.target.textContent] + 1, };
    })
  };


  return (
    <div className={styles.buttonRow}>
      <h1 className={styles.title}>Please Leave Feedback</h1>
      <div>
      <button className={styles.buttons} onClick={handleChange}>
        Good
      </button>
      <button className={styles.buttons} onClick={handleChange}>
        Neutral
      </button>
      <button className={styles.buttons} onClick={handleChange}>
        Bad
        </button>
        </div>
      
      <h2>Statistics</h2>
      {countTotalFeedback() > 0 ? (<div>
      <h3>Good : {feedback.Good}</h3>
      <h3>Bad : { feedback.Bad}</h3>
      <h3>Neutral : {feedback.Neutral}</h3>
        <h3>Total : {countTotalFeedback()}</h3>
        <h3> positive feedback : {countPositiveFeedbackPercentage() }%</h3>
        </div>) : <h3> No feedback Given</h3>}
    </div>
  );

  
}
