import React from "react";
import Navbar from "./components/Navbar";
import "./M4modules.css";
import kp from "./kp.jpg";
import kp1 from "./kp1.jpg";
import kp2 from "./kp2.jpg";
export const M43 = () => {
  return (
    <div className="bodym4">
      <Navbar />
      <div className="bodym44">
        <h1>Exercise 1</h1>
        <img src={kp} className="img" alt="my logo" />
        <br />
        <ol>
          <li>
            Lie on your back with your good knee bent so that your foot rests
            flat on the floor. Your injured leg should be straight. (During this
            exercise, your low back should have a normal curve. Your back has a
            normal curve if you can slip your flat hand in between the floor and
            the small of your back, with your palm touching the floor and your
            back touching the back of your hand.)
          </li>
          <br />
          <li>
            Tighten the thigh muscles in the injured leg by pressing the back of
            your knee flat down to the floor. Hold your knee straight.{" "}
          </li>
          <br />
          <li>
            Keeping the thigh muscles tight, lift your injured leg up so that
            your heel is about 30 cm (12 in.) off the floor. Hold for 5 seconds,
            then lower slowly.{" "}
          </li>
          <br />
        </ol>
        <h1>Exercise 2</h1>
        <img src={kp1} alt="my logo" />
        <br />
        <ol>
          <li>
            Lie on your stomach with your legs fully extended, chest up, and
            your hands under your chest.
          </li>
          <br />
          <li>Bend your knees, curl your legs up, and squeeze the glutes.</li>
          <br />
          <li>
            Lower and straighten your legs and repeat until the set is complete.
          </li>
          <br />
        </ol>
        <h1>Exercise 3</h1>
        <img src={kp2} alt="my logo" />
        <br />
        <ol>
          <li>
            Start with your back against a wall with your feet shoulder width
            and about 2 feet from the wall.
          </li>
          <br />
          <li>
            Engage your abdominal muscles and slowly slide your back down the
            wall until your thighs are parallel to the ground.
          </li>
          <br />
          <li>
            Adjust your feet so your knees are directly above your ankles
            (rather than over your toes).
          </li>
          <br />
          <li>Keep your back flat against the wall.</li>
          <br />
          <li>Hold the position for 20 to 60 seconds.</li>
          <br />
          <li>Slide slowly back up the wall to a standing position.</li>
          <br />
          <li>
            Rest for 30 seconds and repeat the exercise three times. Increase
            your hold time in five-second increments as you increase your
            strength.
          </li>
          <br />
        </ol>
      </div>
    </div>
  );
};
