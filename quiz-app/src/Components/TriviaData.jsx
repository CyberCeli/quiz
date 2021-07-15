import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";




const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;


export default function TriviaData() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const fetchQuestions= async () => {
    const questionsURL = `${URL}`;
    const res = await axios.get(questionsURL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    });
    setQuestions(res.data.records);
  };

  function incrementQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
    // else {
    //   history.push
    // }
  }

  function incrementScore() {
    console.log("a")
    setScore(score + 1);
  }
  console.log(score);

  

  return (
    <div> How Well Do You Know Harry Potter?
      {questions.length > 0 && <Question question={questions[currentQuestion]}
        incrementQuestion={incrementQuestion}
      incrementScore={incrementScore}
      />}
    </div>
    
  )
}
