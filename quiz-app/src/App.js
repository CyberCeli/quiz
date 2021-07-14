import './App.css';
import Navbar from "./Components/Navbar";
import Trivia from "./Components/Trivia";
import addNew from "./Components/AddNew";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/"></Route>
      <Route path="/trivia"> Trivia</Route>
      <Triva />
      <Route path="/add-new">Add Your Trivia</Route>
      <addNew />
     
      <Footer />
      
    </div>
  );
}

export default App;
