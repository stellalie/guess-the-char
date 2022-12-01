import React from 'react';

export function GuessResult(props) {
  const { isCorrect, guess } = props;

  const displayResult = () => {
    if (isCorrect) {
      return <p>Congrats! {guess} is correct!</p>
    } else {
      return <p>Your guess: {guess} is incorrect!</p>
    }
  }

  return (
    <div>
      {displayResult()}
    </div>
  );
}