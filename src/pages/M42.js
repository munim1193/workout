import React from "react";
import Navbar from "./components/Navbar";
import "./M4modules.css";
import fsp from "./fsp.jpg";
import fsp1 from "./fsp1.jpg";
import fsp2 from "./fsp2.jpg";
import fsp3 from "./fsp3.jpg";
export const M42 = () => {
  return (
    <div className="bodym4">
      <Navbar />
      <div className="bodym44">
        <h1>Exercise 1</h1>
        <img src={fsp} className="img" alt="my logo" />
        <br />
        <ol>
          <li>Sit in a chair, with both feet flat on the floor</li>
          <br />
          <li>
            Bend your affected leg behind you so that the top of your foot near
            your toes is flat on the floor and your toes are pointed away from
            your body. If you need to, you can hold on to the sides of the chair
            for support.{" "}
          </li>
          <br />
          <li>
            Hold the stretch for at least 15 to 30 seconds. You should feel a
            stretch in the front (shin) of your lower leg.
          </li>
          <br />
          <li>Repeat 2 to 4 times.</li>
          <br />
        </ol>
        <h1>Exercise 2</h1>
        <img src={fsp1} alt="my logo" />
        <br />
        <ol>
          <li>
            Lie on your back in a doorway, with your good leg through the open
            door.
          </li>
          <br />
          <li>
            Slide your affected leg up the wall to straighten your knee. You
            should feel a gentle stretch down the back of your leg{" "}
          </li>
          <br />
          <li>
            Hold the stretch for at least 1 minute to begin. Then over time, try
            to lengthen the time you hold the stretch to as long as 6 minutes.{" "}
          </li>
          <br />
          <li>Repeat 2 to 4 times.</li>
          <br />
        </ol>
        <h1>Exercise 1</h1>
        <img src={fsp2} className="img" alt="my logo" />
        <br />
        <ol>
          <li>
            Stand facing a wall with your hands on the wall at about eye level.
            Put your affected leg about a step behind your other leg.
          </li>
          <br />
          <li>
            Keeping both heels on the floor, bend both knees. Then gently bring
            your hip and chest toward the wall until you feel a stretch in the
            calf of your back leg.
          </li>
          <br />
          <li>Hold the stretch for at least 15 to 30 seconds.</li>
          <br />
          <li>Repeat 2 to 4 times.</li>
          <br />
        </ol>
        <h1>Exercise 2</h1>
        <img src={fsp3} alt="my logo" />
        <br />
        <ol>
          <li>
            Stand facing a wall with your hands on the wall at about eye level.
            Put your affected leg about a step behind your other leg.
          </li>
          <br />
          <li>
            Keeping your back leg straight and your back heel on the floor, bend
            your front knee and gently bring your hip and chest toward the wall
            until you feel a stretch in the calf of your back leg.
          </li>
          <br />
          <li>Hold the stretch for at least 15 to 30 seconds.</li>
          <br />
          <li>Repeat 2 to 4 times.</li>
          <br />
        </ol>
      </div>
    </div>
  );
};
