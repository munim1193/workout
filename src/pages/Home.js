import React from "react";
import Navbar from "./components/Navbar";
import Workouts from "./components/Workouts";
import Workoutgenerator from "./components/Workoutgenerator";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="body1">
      <div className="body">
        <Navbar />
        <div className="grid-container">
          <div className="c1">
            <h1 className="h1">
              <span className="blank-text">SHAPE</span> YOUR IDEAL{" "}
              <span className="blank-text">BODY</span>
            </h1>
            <p className="p1">
              Body fitness refers to the state of being physically healthy and
              strong through exercise and proper nutrition.
            </p>
            <br />
            <br />
            <h2>Why choose us</h2>
            <p>
              we can make all your wildest dreams come true. just with a click
              of a button you will be able to see all your dream workouts
              without any charges and a good diet to retain your gains. we can
              mange all your progress with the intent of keeping our promises
              and helping you grow
            </p>
          </div>
          <div className="c2">
            <h2>Benefits of exercesis</h2>
            <p>
              Exercise helps people keep a healthy weight and lower their risk
              of some diseases. Exercising regularly can help prevent weight
              gain, type 2 diabetes, heart disease, and high blood pressure
            </p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <Workouts />
      </div>
      <div>
      <Workoutgenerator />
      </div>
      <div className="body1">
        <h1>Explore our program</h1>
        <br />
        <div class="flex-container">
          <div className="m3">
            <Link to="/Mthree" className="module-background">
              <span>Nutrition Calculator</span>
            </Link>
          </div>
          <div className="m4">
            <Link to="/Mfour" className="module-background">
              <span>Chronic disease</span>
            </Link>
          </div>
          <div className="m5">
            <Link to="/Mfive" className="module-background">
              <span>Fitness Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
