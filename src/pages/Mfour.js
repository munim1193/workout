import React from "react";
import "./Mfour.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Mfour() {
  return (
    <div className="bodyfour">
      <Navbar />
      <div className="grid-container">
        <div class="c1">
          <h1 className="h1">
            <span className="blank-text">Prevention</span> of chronic
            <span className="blank-text"> diseases with</span> exercises
          </h1>
          <p className="p1">
            Don,t waist money on medication,do exercise to cure the chronical
            diseases
          </p>
          <br />
          <br />
        </div>
        <div className="c2">
          <h2>Why choose exercise</h2>
          <p>
            Regular physical activity helps improve your overall health,
            fitness, and quality of life. It also helps reduce your risk of
            chronic conditions like type 2 diabetes, heart disease, many types
            of cancer, depression and anxiety, and dementia
          </p>
        </div>
      </div>
      <div class="flex-containerone">
        <div className="m41">
          <Link to="/M41" className="module-background">
            <span>Lower Back pain</span>
          </Link>
        </div>
        <div className="m42">
          <Link to="/M42" className="module-background">
            <span>Front Shin Pain</span>
          </Link>
        </div>
        <div className="m43">
          <Link to="/M43" className="module-background">
            <span>Knee Pain</span>
          </Link>
        </div>
        <div className="m44">
          <Link to="/M44" className="module-background">
            <span>Neck Pain</span>
          </Link>
        </div>
        <div className="m45">
          <Link to="/M45" className="module-background">
            <span>Diabetes</span>
          </Link>
        </div>
        <div className="m46">
          <Link to="/M46" className="module-background">
            <span>Anxiety and depression</span>
          </Link>
        </div>
        <div className="m47">
          <Link to="/M47" className="module-background">
            <span>High blood pressure</span>
          </Link>
        </div>
        <div className="m48">
          <Link to="/M48" className="module-background">
            <span>High cholesterol</span>
          </Link>
        </div>
        <div className="m49">
          <Link to="/M49" className="module-background">
            <span>Osteoporosis</span>
          </Link>
        </div>
        <div className="m410">
          <Link to="/M410" className="module-background">
            <span>Dementia</span>
          </Link>
        </div>
        <div className="m411">
          <Link to="/M411" className="module-background">
            <span>Cancer</span>
          </Link>
        </div>
        <div className="m412">
          <Link to="/M412" className="module-background">
            <span>Asthma</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
