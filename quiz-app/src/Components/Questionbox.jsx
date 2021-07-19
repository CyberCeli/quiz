import React from 'react';
import "./Question.css";

export default function Questionbox() {
  const QuestionBox = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
      <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text, index) => (
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer();
              selected(text);
            }}
          >
            {" "}
            {text}
          </button>
        ))}
      </div>
    );
  };
}