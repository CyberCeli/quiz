import React from 'react'

export default function question({ question, incrementQuestion, incrementScore }) {
  // const handleAnwserButtonClick = (isCorrect) => {

  // }
  function checkifcorrect(e) {
    console.log(e.target.innerText, question.fields.answer)
    if (e.target.innerText == question.fields.answer) incrementScore();
    incrementQuestion();
  }



  return (
    <div>
      
        <div>
          {question.fields.questions}
          <div>
          <button onClick={checkifcorrect}>{question.fields.a}</button>
          <button onClick={checkifcorrect}>{question.fields.b}</button>
          <button onClick={checkifcorrect}>{question.fields.c}</button>
          
          
          </div></div>
    </div>
  )
}
