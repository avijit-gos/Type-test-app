import React from 'react';
import "./Time.css";

function Timer(props) {
  const { timer, startTest } = props;
  return (
    <div className="timer_counter">
      <p>{timer}</p>
      <button onClick={startTest}>Start</button>
    </div>
  )
}

export default Timer;
