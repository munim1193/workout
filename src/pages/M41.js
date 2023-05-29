import React from "react";
import Navbar from "./components/Navbar";
import "./M4modules.css";
import lbp from "./lbp.jpeg";
import lbp1 from "./lbp1.jpeg";
export const M41 = () => {
  return (
    <div className="bodym4">
      <Navbar />
      <div className="bodym44">
        <h1>Exercise 1</h1>
        <img src={lbp} className="img" alt="my logo" />
        <br />
        <ol>
          <li>Hold of 30 seconds in this position in firts week</li>
          <br />
          <li>Hold of 60 seconds in this position in second week </li>
          <br />
          <li>Hold of 1.5 minutes in this position in third week </li>
          <br />
          <li>Gragualy increase the hold with the passage of time </li>
          <br />
        </ol>
        <h1>Exercise 2</h1>
        <img src={lbp1} alt="my logo" />
        <br />
        <ol>
          <li>Hold of 30 seconds in this position in firts week</li>
          <br />
          <li>Hold of 60 seconds in this position in second week </li>
          <br />
          <li>Hold of 1.5 minutes in this position in third week </li>
          <br />
          <li>Gragualy increase the hold with the passage of time </li>
          <br />
        </ol>
      </div>
    </div>
  );
};
