import React, { useState } from "react";

import Navbar from "./components/Navbar";
import "./Mfive.css";
function App() {
  const [mass, setMass] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmiResult, setBmiResult] = useState(0);
  const [bmrResult, setBmrResult] = useState(0);
  const [gender, setGender] = useState("male");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bodyType, setBodyType] = useState("");
  const [message, setMessage] = useState("");

  const calculateBodyType = () => {
    const bmi = weight / (height / 100) ** 2;
    if (gender === "male") {
      if (age <= 30) {
        if (bmi < 18.5) {
          setBodyType("Ectomorph");
        } else if (bmi < 25) {
          setBodyType("Mesomorph");
        } else {
          setBodyType("Endomorph");
        }
      } else {
        if (bmi < 18.5) {
          setBodyType("Ectomorph");
        } else if (bmi < 26) {
          setBodyType("Mesomorph");
        } else {
          setBodyType("Endomorph");
        }
      }
    } else if (gender === "female") {
      if (age <= 30) {
        if (bmi < 18.5) {
          setBodyType("Ectomorph");
        } else if (bmi < 24) {
          setBodyType("Mesomorph");
        } else {
          setBodyType("Endomorph");
        }
      } else {
        if (bmi < 18.5) {
          setBodyType("Ectomorph");
        } else if (bmi < 26) {
          setBodyType("Mesomorph");
        } else {
          setBodyType("Endomorph");
        }
      }
    }
  };

  const calculateMacros = () => {
    // Calculate macros based on weight, height, age, gender, and activity level
    // ...
  };

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmi = mass / heightInMeters ** 2;
    setBmiResult(bmi.toFixed(2));
  };

  const calculateBmr = () => {
    const bmr = 10 * mass + 6.25 * height - 5 * age + 5;
    setBmrResult(bmr.toFixed(2));
  };

  const calculateBodyFat = (e) => {
    e.preventDefault();
    let fat = 0;

    if (gender === "male") {
      fat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waist - neck) +
            0.15456 * Math.log10(height)) -
        450;
    } else {
      fat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waist + hip - neck) +
            0.221 * Math.log10(height)) -
        450;
    }

    setResult(fat.toFixed(2));
  };
  //buttons

  const renderBMI = () => {
    return (
      <div>
        <h1>BMI Calculator</h1>
        <label htmlFor="mass">Mass (kg)</label>
        <input
          type="number"
          id="mass"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <br />
        <button onClick={calculateBmi}>Calculate BMI</button>
        <br />
        <br />
        {bmiResult !== 0 && <p>Your BMI is: {bmiResult}</p>}
      </div>
    );
  };

  const renderBMR = () => {
    return (
      <div>
        <h1>BMR Calculator</h1>
        <label htmlFor="mass">Mass (kg)</label>
        <input
          type="number"
          id="mass"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={calculateBmr}>Calculate BMR</button>
        <br />
        <br />
        {bmrResult !== 0 && <p>Your BMR is: {bmrResult}</p>}
      </div>
    );
  };

  const renderBFat = () => {
    return (
      <div>
        <h1>Body Fat Calculator</h1>
        <form onSubmit={calculateBodyFat}>
          <div>
            <label>Gender: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <br />
          <div>
            <label>Age (years): </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Height (cm): </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Neck (cm): </label>
            <input
              type="number"
              value={neck}
              onChange={(e) => setNeck(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label>Waist (cm): </label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
            />
          </div>
          <br />
          {gender === "female" && (
            <div>
              <label>Hip (cm): </label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
              />
            </div>
          )}
          <br />
          <button type="submit">Calculate</button>
        </form>
        {result && <p>Your body fat percentage is: {result}%</p>}
      </div>
    );
  };

  const renderBMacros = () => {
    return (
      <div>
        <h1>Body Macros Calculator</h1>
        <form onSubmit={calculateMacros}>
          <label>
            Weight (in kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Height (in cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Activity Level:
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
              <option value="extraActive">Extra Active</option>
            </select>
          </label>
          <br />
          <br />
          <button type="submit">Calculate Macros</button>
        </form>
      </div>
    );
  };

  const renderBType = () => {
    return (
      <div>
        <h1>Body Type Calculator</h1>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />
        <br />
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <br />
        <br />
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />
        <button onClick={calculateBodyType}>Calculate Body Type</button>
        <br />
        <br />
        <p>Your body type is: {bodyType}</p>
      </div>
    );
  };

  const render = () => {
    switch (message) {
      case "BMI":
        return renderBMI();
      case "BMR":
        return renderBMR();
      case "B_FAT":
        return renderBFat();
      case "B_MACROS":
        return renderBMacros();
      case "B_TYPE":
        return renderBType();
      default:
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div className="grid-container">
            <div class="c1">
              <h1 className="h1">
                <span className="blank-text">Fitness</span> Calculator of
                <span className="blank-text"> all type</span>
              </h1>
              <p className="p1">
                This is a well-structured component that provides a BMI
                calculator, a BMR calculator, a body type calculator and a body
                fat calculator based on user inputs.
              </p>
              <br />
              <br />
            </div>
            <div className="c2">
              <h2>Why choose exercise</h2>
              <p>
                These calculators can be useful for individuals who want to
                monitor their overall health and fitness levels, as well as for
                medical professionals who use them to assess and diagnose
                patients. By providing an estimate of various body measurements,
                body calculators can help individuals make informed decisions
                about their diet, exercise, and overall lifestyle choices.
              </p>
            </div>
          </div>
        </div>
        <div className="body5">
          <div className="paddinglr">
            <button
              onClick={() => setMessage("BMI")}
              style={{ padding: "20px" }}
            >
              BMI
            </button>
            <button
              onClick={() => setMessage("BMR")}
              style={{ padding: "20px" }}
            >
              BMR
            </button>
            <button
              onClick={() => setMessage("B_FAT")}
              style={{ padding: "20px" }}
            >
              BODY FAT
            </button>
            <button
              onClick={() => setMessage("B_MACROS")}
              style={{ padding: "20px" }}
            >
              BODY MACROS
            </button>
            <button
              onClick={() => setMessage("B_TYPE")}
              style={{ padding: "20px" }}
            >
              BODY TYPE
            </button>
            {render()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
