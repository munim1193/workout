import React from "react";
import Navbar from "./components/Navbar";
import "./About.css";
export default function About() {
  return (
    <div className="body">
      <Navbar />
      <h1 className="h1">FAQS</h1>
      <details>
        <summary className="qbc">
          Why choose us?
          <span class="icon">👇</span>
        </summary>
        <p className="ans">
          we can make all your wildest dreams come true. just with a click of a
          button you will be able to see all your dream workouts without any
          charges and a good diet to retain your gains. we can mange all your
          progress with the intent of keeping our promises and helping you grow
        </p>
      </details>
      <details>
        <summary className="qbc">
          Benefits of exercesis
          <span class="icon">👇</span>
        </summary>
        <p className="ans">
          Exercise helps people keep a healthy weight and lower their risk of
          some diseases. Exercising regularly can help prevent weight gain, type
          2 diabetes, heart disease, and high blood pressure
        </p>
      </details>
      <details>
        <summary className="qbc">
          Functions of our website?
          <span class="icon">👇</span>
        </summary>
        <p className="ans">
          Our website consists of:
          <br />
          (1): Workout Training System
          <br />
          (2): Milestone base Workout Training System
          <br />
          (3): Prevention of chronical diseases with exercise
          <br />
          (4): Fitness Calculators
        </p>
      </details>
      <details>
        <summary className="qbc">
          Defined all function?
          <span class="icon">👇</span>
        </summary>
        <p className="ans">
          <b>(1):Food nutrition calculator:</b>
          <br />
          The user can check if the meal they are having is good for them or
          not. They will be given a chart and they can find for themselves that
          the meal is how much useful for them, after calculating their fats,
          nutrition, carbs and protein.
          <br /> 
          <b>(2):Prevention of chronic disease:</b>
          <br />
          Regular physical activity helps improve your overall health, fitness,
          and quality of life. It also helps reduce your risk of chronic
          conditions like type 2 diabetes, heart disease, many types of cancer,
          depression and anxiety, and dementia.
          <br /> 
          <b>(3)Fitness calculators:</b>
          <br /> 
          Fitness
          calculators consist of many formulas like body mass index, body macros
          counter, Basel metabolic rate etc. 
          <br />
          <b>(4)Workout Training System</b>
          <br />
          This module gives the users all
          the training options with their videos and process and the parts of
          the body the exercise will hit the most and will be the most effective
          for.
        </p>
      </details>
    </div>
  );
}
