import React from 'react'
import question from './Question';

export default function Answerbox () {
  const Result = ({score, playAgain}) => (
    <div className="score-board">
      <div className="score"> Your score is {score} / 5 correct answer ! ! ! </div>
      <button onClick={playAgain} > Play Again </button>
  return (
  
  )
}

