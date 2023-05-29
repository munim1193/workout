import React from "react";
import Navbar from "./components/Navbar";
import "./M4modules.css";
import np from "./np.png";
import np1 from "./np1.png";
import np2 from "./np2.png";
import np3 from "./np3.png";
export const M44 = () => {
  return (
    <div className="bodym4">
      <Navbar />
      <div className="bodym44">
        <h1>Exercise 1</h1>
        <img src={np} className="img" alt="my logo" />
        <br />
        <ul>
          <li>
            <h2>Neck stretch</h2> 
            Keeping the rest of the body straight, push your chin
            forward, so your throat is stretched. Gently tense your neck muscles
            and huld for five seconds. Return your head to the centre and push
            it backwards, keeping your chin up. Huld for five seconds. Repeat
            five times.
          </li>
          <br />
        </ul>
        <h1>Exercise 2</h1>
        <img src={np1} alt="my logo" />
        <br />
        <ul>
          <li>
            <h2>Neck tilt (side to side)</h2> 
            Tilt your head down towards one of your
            shoulders, leading with your ear. Try not to shrug your shoulder.
            Gently tense your neck muscles and huld for five seconds. Return
            your head to centre and repeat on the opposite side. Repeat five
            times on each side
          </li>
          <br />
        </ul>
        <h1>Exercise 3</h1>
        <img src={np2} alt="my logo" />
        <br />
        <ul>
          <li>
            <h2>Neck tilt (down)</h2>
            Sit or stand, with good posture. It’s best to sit
            down if you have trouble balancing. Slowly tilt your head down, to
            rest your chin on your chest. Gently tense your neck muscles and
            huld for five seconds. Repeat five times
          </li>
          <br />
        </ul>
        <h1>Exercise 4</h1>
        <img src={np3} alt="my logo" />
        <br />
        <ul>
          <li>
            <h2>Neck turn</h2> 
            Turn your head to one side, keeping your chin at the same
            height and moving within comfortable limits. Gently tense your neck
            muscles and huld for five seconds. Return your head to the centre
            and repeat on the opposite side. Repeat five times on each side
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};
