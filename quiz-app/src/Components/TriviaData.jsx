import { useState, useEffect } from "react";
import axios from "axios";




const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;


export default function TriviaData() {
  const [questions, setQuestions] = useState({});
  
  useEffect(() => {
    fetchQuestions();
  }, []);
  
  const fetchQuestions= async () => {
    const questionsURL = `${URL}/${id}`;
    const res = await axios.get(questionsURL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    });
    setQuestions(res.data);
  };
}
