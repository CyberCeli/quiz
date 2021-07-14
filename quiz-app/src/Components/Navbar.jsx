import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <Link to="/">Trivia</Link>
      <Link to="/">Trivia</Link>
      <Link to="/add-new">Add Your Trivia</Link>
    </nav>
  );
}