import React from 'react'

export default function question({ question, incrementQuestion, incrementScore }) {
  // const handleAnwserButtonClick = (isCorrect) => {

  // }
  function checkifcorrect(e) {
    console.log(e.target.innerText, question.fields.answer)
    if (e.target.innerText == question.fields.answer) incrementScore();
    incrementQuestion();
  }
  const QuestionBox = ({ question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return(
  <div className="questionBox">
  <div className="question">{question}</div>
  {answer.map((text, index) => (
    <button
        key={index}
        className="answerBtn"
        onClick={()=>{
              setAnswer();
              selected(text);
            }}> {text}
   </button>
  ))}


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
