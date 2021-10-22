import React from 'react'
import "./Score.css";

function Score(props) {
  const { correct, incorrect } = props;
  console.log(`Correct = ${correct}`);
  console.log(`incorrect = ${incorrect}`);
  return (
    <div className="score_section">
      <p className="score">Your Score is {Math.round((correct + incorrect) / 5) / 1} WPM</p>
    </div>
  )
}

export default Score
