import React from 'react'
import "./Input.css";

//Some code changes...
function Input(props) {
  const { timer, words, currentInput, changeInput, handleKeyDown } = props
  return (
    <div className="input_section">
      <input type="text" disabled={timer === 60} className="input" onKeyDown={handleKeyDown} value={currentInput} onChange={changeInput} />
      <div className="demo_text">
        {words.map((word, i) => (
          <span key={i}>
            <span>
              {word.split("").map((char, idx) => (
                <span key={idx}>{char}</span>
              ))}
            </span>
            <span> </span>
          </span>
        ))}
      </div>
    </div >
  )
}

export default Input
