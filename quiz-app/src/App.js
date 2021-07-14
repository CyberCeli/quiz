import './App.css';
import Navbar from "./Components/Navbar";
import Trivia from "./Components/Trivia";
import AddNew from "./Components/AddNew";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/"></Route>
      <Route path="/trivia"> Trivia</Route>
      <Trivia />
      <Route path="/add-new">Add Your Trivia</Route>
      <AddNew />
     
      <Footer />
      
    </div>
  );
}

export default App;
