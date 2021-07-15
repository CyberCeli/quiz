import './App.css';
import Navbar from "./Components/Navbar";
import Trivia from "./Components/Trivia";
import AddNew from "./Components/AddNew";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
import TriviaData from './Components/TriviaData';

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/HARRY%20POTTER`;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/"></Route>
      <Route exact path="/trivia"> </Route>
      <TriviaData />
      <Route exact path="/add-new"> </Route>
      <AddNew />
     
      <Footer />
      
    </div>
  );
}

export default App;
