import { useState } from 'react';
import react from 'react';
import axios from 'axios';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;

export default function AddNew() {

  const [questions, setQuestions] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [answers, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      questions,
      A,
      B,
      C,
      answers,
    };

    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    console.log(res);
  };

  return (
    <div>
      ADD NEW
    <form onSubmit={handleSubmit}>
    <label>Questions</label>
    <input
      type="text"
      value={questions}
      onChange={(e) => setQuestions(e.target.value)}/>
  <br />
  <form onSubmit={handleSubmit}>
    <label>A  </label>
    <input
      type="text"
      value={A}
      onChange={(e) => setA(e.target.value)}/>
    <br />
    <form onSubmit={handleSubmit}>
    <label>B</label>
    <input
      type="text"
      value={B}
      onChange={(e) => setB(e.target.value)}/>
      <br />
      <form onSubmit={handleSubmit}>
    <label>C</label>
    <input
      type="text"
      value={C}
      onChange={(e) => setC(e.target.value)}/>
        <br />
        <form onSubmit={handleSubmit}>
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
