import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./Welcome.css"
export default function Welcome() {
  return (
    <div className="body">
      <div className="Styles.App ">
      <header className="App-header">
      <img src={logo} className={"logo-p"} alt="my logo" />
        <h1>Workout Training System</h1>
        <p>The best fitness guide website in the town so shape your ideal body with us</p> 
        <Link to="/login" className="App-link">
          Get Started
        </Link>
      </header>
    </div>
    </div>
  );
}
