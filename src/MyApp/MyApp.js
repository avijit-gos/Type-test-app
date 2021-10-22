import React, { useState, useEffect } from 'react';
import randomWords from 'random-words'
import Input from './Input/Input';
import "./MyApp.css";
import Timer from './Timer/Timer';
import Score from './Score/Score';

function MyApp() {
  const [timer, setTimer] = useState(60);
  const [words, setWords] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0)

  const startTest = () => {
    let interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 0) {
          clearInterval(interval)
        } else {
          return prev - 1;
        }
      })
    }, 1000)
  }

  useEffect(() => {
    setWords(generateWords());
  }, []);

  function generateWords() {
    return new Array(200).fill(null).map(() => randomWords())
  }

  function handleKeyDown({ keyCode }) {
    if (keyCode === 32) {
      checkMatch();
      setCurrentInput('');
      setCurrentWordIndex(currentWordIndex + 1);
    }
  }

  function checkMatch() {
    const wordToComp = words[currentWordIndex];
    const doesItMatch = wordToComp === currentInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1)
    } else {
      setIncorrect(incorrect + 1)
    }
  }

  function changeInput(e) {
    setCurrentInput(e.target.value)
  }

  return (
    <div className="container">
      {
        timer > 0 ?
          <div>
            <Timer timer={timer} startTest={startTest} />
            <Input words={words} currentInput={currentInput} handleKeyDown={handleKeyDown} changeInput={changeInput} timer={timer} />
          </div> :
          <Score correct={correct} incorrect={incorrect} />
      }
    </div>
  )
}

export default MyApp
