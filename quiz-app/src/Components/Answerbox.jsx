import React from 'react'



export default function Answerbox({ question, score, playAgain}) {
  
  return (
  
    <div className="score-board">
      <div className="score"> Your score is {score}  </div>
      <button onClick={playAgain}>Play Again</button>
    </div>
  )
}
// GitHub Source