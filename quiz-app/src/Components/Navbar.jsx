import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  return (
    <nav>
      <Link to="/homepage">Home</Link>
      <Link to="/trivia">Trivia</Link>
      <Link to="/explore">Explore Hogwarts</Link>
      <Link to="/add-new">Add Your Trivia</Link>
    </nav>
  );
}