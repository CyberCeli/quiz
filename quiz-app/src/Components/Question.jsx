import React from 'react'

export default function question({ question, incrementQuestion, incrementScore }) {
  // const handleAnwserButtonClick = (isCorrect) => {

  // }
  function checkifcorrect(e) {
    console.log(e.target.innerText, question.fields.Answer)
    if (e.target.innerText == question.fields.Answer) incrementScore();
    incrementQuestion();
  }



  return (
    <div>
      
        <div>
          {question.fields.Questions}
          <div>
          <button onClick={checkifcorrect}>{question.fields.A}</button>
          <button onClick={checkifcorrect}>{question.fields.B}</button>
          <button onClick={checkifcorrect}>{question.fields.C}</button>
          
          
          </div></div>
    </div>
  )
}
