import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;


export default function Editnew() {
  const [questions, setQuestions] = useState({});
  const [a, setA] = useState({});
  const [b, setB] = useState({});
  const [c, setC] = useState({});
  const [answers, setAnswer] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetchEditnew();
  }, []);

  const fetchEditnew = async () => {
    const harryURL = `${URL}/${id}`;
    const res = await axios.get(harryURL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`.
      },
    });
    console.log(res.data.fields);
    setQuestions(res.data.fields);
  };

  const handleChange = (e) => {
    const { question, value } = e.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [question]: value,

    }));
  }
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    const harryURL = `${URL}/${id}`;
    const res = await axios.put(
      harryURL,
      { fields: questions },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_KEY}`,
        },
      }
    );
    console.log(res);
  }




  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input name="questions" value={harry.question} onChange={handleChange} />
        <label>Questions</label>
        <input
          type="text"
          value={harry.Questions}
          name="Questions"
          onChange={(e) =>
            setQuestions((prevQuestion) => ({
              question: parseInt(e.target.value)
            })
            )
          }
        />
        <br />
        <label>A</label>
        <input
          type="text"
          value={harry.A}
          name="A"
          onChange={handleChange}
        />
        <br />
        <label>B</label>
        <input
          type="text"
          value={harry.B}
          name="B"
          onChange={handleChange}
        />
        <br />
        <label>C</label>
        <input
          type="text"
          value={harry.C}
          name="A"
          onChange={handleChange}
        />
        <br />
        <label>Answer</label>
        <input
          type="text"
          value={harry.Answer}
          name="Answer"
          onChange={handleChange}
        />
        
      </form>
      
    </div>
  );
}
