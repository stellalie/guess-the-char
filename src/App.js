import './App.css';
import React, {useState} from "react";
import {DisplayImage} from "./components/DisplayImage";
import {GuessResult} from "./components/GuessResult";

function App() {
  const images = [
    "https://dummyimage.com/300",
    "https://dummyimage.com/400",
    "https://dummyimage.com/500",
    "https://dummyimage.com/600",
    "https://dummyimage.com/700"
  ];
  const answer = "Samus";
  const maxTryCount = images.length;

  const [tryCount, setTryCount] = useState(0);
  const [guess, setGuess] = useState('');

  const handleEnter = e => {
    if (e.keyCode === 13) {
      setGuess(e.target.value);
      setTryCount(tryCount + 1)
    }
  };
  const isCorrect = answer === guess;

  return (
    <div className="App">
      <header className="App-header">
        Guess the char!
        <br/>
        <br/>
        { tryCount >= maxTryCount ? "No more guess" :
          <div>
            <DisplayImage images={images} tryCount={tryCount} />
            Try: {tryCount}/{maxTryCount}
            <br/>
            { !isCorrect ? <input type="text" name="guess" onKeyDown={handleEnter}/> : '' }
          </div>
        }
        <br/>
        { tryCount > 0 ? <GuessResult isCorrect={isCorrect} guess={guess} /> : ''}
      </header>
    </div>
  );
}

export default App;
