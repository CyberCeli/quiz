import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;

export default function AddNew() {

  const [questions, setQuestions] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [answer, setAnswer] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      questions,
      a,
      b,
      c,
      answer,
    };

    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    console.log(res);
    setQuestions("");
    history.push(`/harrypotter/${res.data.id}`);
  };
  

  return (
    <div>

      Add Your Harry Trivia
    <form onSubmit={handleSubmit}>
    <label>Questions</label>
    <input
      type="text"
      value={questions}
      onChange={(e) => setQuestions(e.target.value)}/>
  <br />
  
    <label>A  </label>
    <input
      type="text"
      value={a}
            onChange={(e) => setA(e.target.value)}
          />
    <br />
    
    <label>B</label>
    <input
      type="text"
      value={b}
      onChange={(e) => setB(e.target.value)}/>
      <br />
      
    <label>C</label>
    <input
      type="text"
      value={c}
      onChange={(e) => setC(e.target.value)}/>
        <br />
        
    <label>answer</label>
    <input
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}/>
                <br />
          <button>CREATE ME</button>
          
              </form>
              </div>
  );
}
