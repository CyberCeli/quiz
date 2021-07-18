import React from 'react'
import question from './Question';
import Trivia from "./Trivia";

export default function Answerbox({ question, options, selected, score, playAgain}) {
  
  return (
  
    <div className="score-board">
      <div className="score"> Your score is {score}  </div>
      <button onClick={playAgain}>Play Again</button>
    </div>
)}