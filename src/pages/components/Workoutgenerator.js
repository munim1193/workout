import { useState } from "react";
import "./Navbar.css";
export default function Workoutgenerator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [fitnessGoals, setFitnessGoals] = useState("lose weight");
  const [fitnessLevel, setFitnessLevel] = useState("beginner");

  const calculate = () => {
    const bmi = weight / (height / 100) ** 2;
    const bmr =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    let workoutPlan = [];
    if (bmi < 18.5) {
      if (fitnessGoals === "lose weight") {
        workoutPlan = [
          <div>
            <h2>Day 1: Full-Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Squats: 3 sets x 10-12 reps</li>
              <li>Bench Press or Push-ups: 3 sets x 10-12 reps</li>
              <li>Bent-Over Rows or Lat Pulldowns: 3 sets x 10-12 reps</li>
              <li>Lunges: 3 sets x 10-12 reps per leg</li>
              <li>Dumbbell Shoulder Press: 3 sets x 10-12 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 2: Rest and Recovery</h2>

            <h2>Day 3: Cardio and HIIT Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>
                30-45 minutes of moderate to high intensity cardio (e.g.
                running, cycling, rowing)
              </li>
              <li>
                HIIT Circuit: 3 rounds of 30 seconds of each exercise with 10
                seconds rest in between: Jumping Jacks, Burpees, Mountain
                Climbers, High Knees, Jump Squats
              </li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Full-Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Deadlifts: 3 sets x 10-12 reps</li>
              <li>Dumbbell Chest Flyes or Push-ups: 3 sets x 10-12 reps</li>
              <li>Dumbbell Rows: 3 sets x 10-12 reps per arm</li>
              <li>Step-ups: 3 sets x 10-12 reps per leg</li>
              <li>Arnuld Press: 3 sets x 10-12 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 6: Rest and Recovery</h2>

            <h2>Day 7: Active Rest Day</h2>
            <ul>
              <li>
                Light to moderate intensity activity such as yoga, stretching,
                or going for a walk.
              </li>
            </ul>
            <p>
              Note: In addition to the workout plan, a calorie deficit and
              balanced diet are important for weight loss. Consider consulting
              with a certified fitness professional for personalized guidance
              and support.
            </p>
          </div>,
        ];
      } else if (fitnessGoals === "build muscle") {
        workoutPlan = [
          <div>
            <h2>Day 1: Upper Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Bench Press: 4 sets x 8-10 reps</li>
              <li>Bent-Over Rows: 4 sets x 8-10 reps</li>
              <li>Dumbbell Shoulder Press: 4 sets x 8-10 reps</li>
              <li>Pull-ups or Lat Pulldowns: 4 sets x 8-10 reps</li>
              <li>Bicep Curls: 3 sets x 10-12 reps</li>
              <li>Tricep Extensions: 3 sets x 10-12 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 2: Rest and Recovery</h2>

            <h2>Day 3: Lower Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Squats: 4 sets x 8-10 reps</li>
              <li>Deadlifts: 4 sets x 8-10 reps</li>
              <li>Lunges: 4 sets x 8-10 reps per leg</li>
              <li>Calf Raises: 3 sets x 15-20 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Upper Body Hypertrophy Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Incline Bench Press: 3 sets x 12-15 reps</li>
              <li>Seated Cable Rows: 3 sets x 12-15 reps</li>
              <li>Lateral Raises: 3 sets x 12-15 reps</li>
              <li>Hammer Curls: 3 sets x 12-15 reps</li>
              <li>Skull Crushers: 3 sets x 12-15 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 6: Rest and Recovery</h2>

            <h2>Day 7: Lower Body Hypertrophy Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Leg Press: 3 sets x 12-15 reps</li>
              <li>Romanian Deadlifts: 3 sets x 12-15 reps</li>
              <li>Leg Extensions: 3 sets x 12-15 reps</li>
              <li>Leg Curls: 3 sets x 12-15 reps</li>
              <li>Standing Calf Raises: 3 sets x 15-20 reps</li>
              <li>Planks: 3 sets x 30 seconds</li>
            </ul>
            <p>
              Note: In addition to the workout plan, a calorie surplus and
              balanced diet with sufficient protein are important for muscle
              building. Consider consulting with a certified fitness
              professional for personalized guidance and support.
            </p>
          </div>,
        ];
      }
    } else if (bmi >= 18.5 && bmi < 25) {
      if (fitnessGoals === "lose weight") {
        workoutPlan = [
          <div>
            <h2>Day 1: Cardio and Core</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>
                30-45 minutes of moderate to high intensity cardio (e.g.
                running, cycling, rowing)
              </li>
              <li>Planks: 3 sets x 30 seconds (front, left, right)</li>
              <li>Russian Twists: 3 sets x 15-20 reps</li>
              <li>Bicycle Crunches: 3 sets x 15-20 reps</li>
            </ul>
            <h2>Day 2: Rest and Recovery</h2>

            <h2>Day 3: Upper Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Push-ups: 3 sets x 10-12 reps</li>
              <li>Dumbbell Rows: 3 sets x 10-12 reps</li>
              <li>Shoulder Press: 3 sets x 10-12 reps</li>
              <li>Lat Pulldowns: 3 sets x 10-12 reps</li>
              <li>Bicep Curls: 3 sets x 10-12 reps</li>
              <li>Tricep Dips: 3 sets x 10-12 reps</li>
            </ul>
            <h2>Day 4:Rest and Recovery</h2>

            <h2>Day 5</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Squats: 3 sets x 10-12 reps</li>
              <li>Deadlifts: 3 sets x 10-12 reps</li>
              <li>Lunges: 3 sets x 12 reps (each leg)</li>
              <li>Calf Raises: 3 sets x 12-15 reps</li>
              <li>Leg Press: 3 sets x 10-12 reps</li>
            </ul>
            <h2>Day 6: Rest and Recovery</h2>

            <h2>Day 7: </h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Barbell Squats: 3 sets x 12-15 reps</li>
              <li>Dumbbell Bench Press: 3 sets x 12-15 reps</li>
              <li>Dumbbell Rows: 3 sets x 12-15 reps</li>
              <li>Shoulder Flyes: 3 sets x 12-15 reps</li>
              <li>Bicep Hammer Curls: 3 sets x 12-15 reps</li>
              <li>Tricep Skullcrushers: 3 sets x 12-15 reps</li>
            </ul>
            <p>
              Note: In addition to the workout plan, a calorie deficit and
              balanced diet are important for weight loss. Consider consulting
              with a certified fitness professional and registered dietitian for
              personalized guidance and support.
            </p>
          </div>,
        ];
      } else if (fitnessGoals === "build muscle") {
        workoutPlan = [
          <div>
            <h2>Day 1: Upper Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Bench Press: 4 sets x 8-12 reps</li>
              <li>Pull-ups or Lat Pulldowns: 4 sets x 8-12 reps</li>
              <li>Military Press: 3 sets x 8-12 reps</li>
              <li>Barbell Curls: 3 sets x 8-12 reps</li>
              <li>Tricep Dips: 3 sets x 8-12 reps</li>
            </ul>
            <h2>Day 2:Rest and Recovery</h2>

            <h2>Day 3: Lower Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Squats: 4 sets x 8-12 reps</li>
              <li>Deadlifts: 4 sets x 8-12 reps</li>
              <li>Leg Press: 3 sets x 8-12 reps</li>
              <li>Calf Raises: 3 sets x 15 reps</li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Full-Body Hypertrophy Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Bench Press: 3 sets x 12-15 reps</li>
              <li>Bent-Over Rows: 3 sets x 12-15 reps</li>
              <li>Squats: 3 sets x 12-15 reps</li>
              <li>Shoulder Press: 3 sets x 12-15 reps</li>
              <li>Barbell Curls: 3 sets x 12-15 reps</li>
              <li>Tricep Skullcrushers: 3 sets x 12-15 reps</li>
            </ul>
            <h2>Day 6: Rest and Recovery</h2>

            <h2>Day 7: Cardio and Core</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>
                30-45 minutes of moderate to high intensity cardio (e.g.
                running, cycling, rowing)
              </li>
              <li>Planks: 3 sets x 30 seconds (front, left, right)</li>
              <li>Russian Twists: 3 sets x 15-20 reps</li>
              <li>Bicycle Crunches: 3 sets x 15-20 reps</li>
            </ul>
            <p>
              Note: In addition to the workout plan, a calorie surplus and
              adequate protein intake are important for muscle growth. Consider
              consulting with a certified fitness professional for personalized
              guidance and support.
            </p>
          </div>,
        ];
      }
    } else if (bmi >= 25 && bmi < 30) {
      if (fitnessGoals === "lose weight") {
        workoutPlan = [
          <div>
            <h2>Day 1: Cardio and Resistance Training</h2>
            <ul>
              <li>
                20-30 minutes of moderate intensity cardio (e.g. treadmill,
                elliptical, cycling)
              </li>
              <li>Squats: 3 sets x 12 reps</li>
              <li>Squats: 3 sets x 12 reps</li>
              <li>Dumbbell Rows: 3 sets x 12 reps</li>
              <li>Push-ups: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 2: High-Intensity Interval Training (HIIT)</h2>
            <ul>
              <li>
                Warm-up with 5 minutes of light cardio (e.g. jumping jacks,
                jogging in place)
              </li>
              <li>
                Warm-up with 5 minutes of light cardio (e.g. jumping jacks,
                jogging in place)
              </li>
              <li>Jumping Jacks: 3 sets x 20 reps</li>
              <li>Mountain Climbers: 3 sets x 20 reps</li>
              <li>Plank: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 3: Resistance Training</h2>
            <ul>
              <li>Deadlifts: 3 sets x 10 reps</li>
              <li>Bench Press: 3 sets x 10 reps</li>
              <li>Seated Dumbbell Press: 3 sets x 10 reps</li>
              <li>Pull-ups or Lat Pulldowns: 3 sets x 12 reps</li>
              <li>Bicep Curls: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Cardio and Resistance Training</h2>
            <ul>
              <li>
                30-45 minutes of moderate intensity cardio (e.g. treadmill,
                elliptical, cycling)
              </li>
              <li>Step-ups: 3 sets x 12 reps (each leg)</li>
              <li>Romanian Deadlifts: 3 sets x 12 reps</li>
              <li>Dumbbell Flyes: 3 sets x 12 reps</li>
              <li>Triceps Pushdowns: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 6: HIIT</h2>
            <ul>
              <li>
                Warm-up with 5 minutes of light cardio (e.g. jumping jacks,
                jogging in place)
              </li>
              <li>
                Burpee intervals: 30 seconds at maximum effort, fullowed by 30
                seconds of rest (repeat for 10-15 minutes)
              </li>
              <li>Jump Squats: 3 sets x 20 reps</li>
              <li>Bicycle Crunches: 3 sets x 20 reps</li>
              <li>Russian Twists: 3 sets x 20 reps</li>
            </ul>
            <h2>Day 7: Active Recovery</h2>
            <ul>
              <li>
                30-60 minutes of low-intensity cardio (e.g. walking, gentle
                cycling)
              </li>
              <li>
                Stretching and foam rulling to aid in muscle recovery and
                flexibility
              </li>
            </ul>
            <p>
              Note: Consistency and progress are key in achieving weight loss
              goals. Be sure to also incorporate a balanced and nutritious diet
              to support your fitness efforts. Consider consulting with a
              certified fitness professional and/or registered dietitian for
              personalized guidance and support.
            </p>
          </div>,
        ];
      } else if (fitnessGoals === "build muscle") {
        workoutPlan = [
          <div>
            <h2>Day 1: Upper Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Bench Press: 4 sets x 8-10 reps</li>
              <li>Bent Over Rows: 4 sets x 8-10 reps</li>
              <li>Shoulder Press: 3 sets x 10-12 reps</li>
              <li>Lat Pulldowns: 3 sets x 10-12 reps</li>
              <li>Bicep Curls: 3 sets x 10-12 reps</li>
              <li>Tricep Dips: 3 sets x 10-12 reps</li>
            </ul>
            <h2>Day 2: Rest and Recovery</h2>

            <h2>Day 3: Lower Body Strength Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Squats: 4 sets x 8-10 reps</li>
              <li>Deadlifts: 4 sets x 8-10 reps</li>
              <li>Lunges: 3 sets x 12 reps (each leg)</li>
              <li>Calf Raises: 3 sets x 12-15 reps</li>
              <li>Leg Press: 3 sets x 10-12 reps</li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Full-Body Hypertrophy Training</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>Barbell Squats: 3 sets x 12-15 reps</li>
              <li>Dumbbell Bench Press: 3 sets x 12-15 reps</li>
              <li>Dumbbell Rows: 3 sets x 12-15 reps</li>
              <li>Shoulder Flyes: 3 sets x 12-15 reps</li>
              <li>Bicep Hammer Curls: 3 sets x 12-15 reps</li>
              <li>Tricep Skullcrushers: 3 sets x 12-15 reps</li>
            </ul>
            <h2>Day 6: Rest and Recovery</h2>

            <h2>Day 7: Cardio and Abs</h2>
            <ul>
              <li>
                Warm-up with 5-10 minutes of light cardio (e.g. jumping jacks,
                brisk walking)
              </li>
              <li>
                30-45 minutes of moderate intensity cardio (e.g. treadmill,
                elliptical, cycling)
              </li>
              <li>Planks: 3 sets x 30 seconds (front, left, right)</li>
              <li>Russian Twists: 3 sets x 15-20 reps</li>
              <li>Bicycle Crunches: 3 sets x 15-20 reps</li>
            </ul>
            <p>
              Note: It's important to progressively overload your muscles by
              gradually increasing the weight, reps, and/or sets over time. Be
              sure to also incorporate a balanced and nutritious diet to support
              your muscle building efforts. Consider consulting with a certified
              fitness professional for personalized guidance and support.
            </p>
          </div>,
        ];
      }
    } else if (bmi >= 30) {
      if (fitnessGoals === "lose weight") {
        workoutPlan = [
          <div>
            <h2>Day 1: Cardio and Resistance Training</h2>
            <ul>
              <li>
                30 minutes of moderate intensity cardio (e.g. treadmill,
                elliptical, cycling)
              </li>
              <li>Squats: 3 sets x 12 reps</li>
              <li>Lunges: 3 sets x 12 reps (each leg)</li>
              <li>Dumbbell Rows: 3 sets x 12 reps</li>
              <li>Push-ups: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 2: High-Intensity Interval Training (HIIT)</h2>
            <ul>
              <li>
                Warm-up with 5 minutes of light cardio (e.g. jumping jacks,
                jogging in place)
              </li>
              <li>
                Sprint intervals: 30 seconds at maximum effort, fullowed by 30
                seconds of rest (repeat for 10-15 minutes)
              </li>
              <li>Jumping Jacks: 3 sets x 20 reps</li>
              <li>Mountain Climbers: 3 sets x 20 reps</li>
              <li>Plank: 3 sets x 30 seconds</li>
            </ul>
            <h2>Day 3: Resistance Training</h2>
            <ul>
              <li>Deadlifts: 3 sets x 10 reps</li>
              <li>Bench Press: 3 sets x 10 reps</li>
              <li>Seated Dumbbell Press: 3 sets x 10 reps</li>
              <li>Pull-ups or Lat Pulldowns: 3 sets x 12 reps</li>
              <li>Bicep Curls: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 4: Rest and Recovery</h2>

            <h2>Day 5: Cardio and Resistance Training</h2>
            <ul>
              <li>
                30-45 minutes of moderate intensity cardio (e.g. treadmill,
                elliptical, cycling)
              </li>
              <li>Step-ups: 3 sets x 12 reps (each leg)</li>
              <li>Romanian Deadlifts: 3 sets x 12 reps</li>
              <li>Dumbbell Flyes: 3 sets x 12 reps</li>
              <li>Triceps Pushdowns: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 6: HIIT</h2>
            <ul>
              <li>
                Warm-up with 5 minutes of light cardio (e.g. jumping jacks,
                jogging in place)
              </li>
              <li>
                Burpee intervals: 30 seconds at maximum effort, fullowed by 30
                seconds of rest (repeat for 10-15 minutes)
              </li>
              <li>Jump Squats: 3 sets x 20 reps</li>
              <li>Bicycle Crunches: 3 sets x 20 reps</li>
              <li>Russian Twists: 3 sets x 20 reps</li>
            </ul>
            <h2>Day 7: Resistance Training</h2>
            <ul>
              <li>Leg Press: 3 sets x 10 reps</li>
              <li>Seated Cable Rows: 3 sets x 10 reps</li>
              <li>Dumbbell Shoulder Press: 3 sets x 10 reps</li>
              <li>Lat Pulldowns or Pull-ups: 3 sets x 12 reps</li>
              <li>Hammer Curls: 3 sets x 12 reps</li>
            </ul>
            <p>
              Note: It's important to gradually increase intensity and challenge
              the body over time to continue making progress. Additionally,
              creating a calorie deficit through a combination of exercise and
              dietary modifications is essential for weight loss. Consider
              consulting with a certified fitness professional and/or registered
              dietitian for personalized guidance and support.
            </p>
          </div>,
        ];
      } else if (fitnessGoals === "build muscle") {
        workoutPlan = [
          <div>
            <h2>Day 1: Chest and Triceps</h2>
            <ul>
              <li>Bench Press: 3 sets x 10 reps</li>
              <li>Incline Dumbbell Press: 3 sets x 10 reps</li>
              <li>Cable Flyes: 3 sets x 12 reps</li>
              <li>Close-grip Bench Press: 3 sets x 10 reps</li>
              <li>Triceps Pushdowns: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 2: Back and Biceps</h2>
            <ul>
              <li>Deadlifts: 3 sets x 10 reps</li>
              <li>Bent-over Rows: 3 sets x 10 reps</li>
              <li>Lat Pulldowns: 3 sets x 12 reps</li>
              <li>Barbell Curls: 3 sets x 10 reps</li>
              <li>Hammer Curls: 3 sets x 12 reps</li>
            </ul>
            <h2>Legs and Shoulders</h2>
            <ul>
              <li>Squats: 3 sets x 10 reps</li>
              <li>Leg Press: 3 sets x 12 reps</li>
              <li>Lunges: 3 sets x 12 reps (each leg)</li>
              <li>Seated Dumbbell Press: 3 sets x 10 reps</li>
              <li>Lateral Raises: 3 sets x 12 reps</li>
            </ul>
            <h2>Rest and Recovery</h2>

            <h2>Chest and Triceps</h2>
            <ul>
              <li>Incline Bench Press: 3 sets x 10 reps</li>
              <li>Decline Dumbbell Press: 3 sets x 10 reps</li>
              <li>Dumbbell Flyes: 3 sets x 12 reps</li>
              <li>Dips: 3 sets x 10 reps</li>
              <li>Skull Crushers: 3 sets x 12 reps</li>
            </ul>
            <h2>Back and Biceps</h2>
            <ul>
              <li>Pull-ups: 3 sets x 10 reps</li>
              <li>Cable Rows: 3 sets x 10 reps</li>
              <li>Seated Rows: 3 sets x 12 reps</li>
              <li>Preacher Curls: 3 sets x 10 reps</li>
              <li>Concentration Curls: 3 sets x 12 reps</li>
            </ul>
            <h2>Day 7: Legs and Shoulders</h2>
            <ul>
              <li>Leg Extensions: 3 sets x 12 reps</li>
              <li>Leg Curls: 3 sets x 12 reps</li>
              <li>Calf Raises: 3 sets x 15 reps</li>
              <li>Shoulder Press: 3 sets x 10 reps</li>
              <li>Upright Rows: 3 sets x 12 reps</li>
            </ul>
            <p>
              Note: It's important to gradually increase weight and intensity
              over time to challenge the muscles and promote growth. It's also
              important to consume a diet that is high in protein and
              nutrient-dense foods to support muscle growth and repair. Consider
              consulting with a certified fitness professional and/or registered
              dietitian for personalized guidance and support.
            </p>
          </div>,
        ];
      }
    }

    return {
      bmi: bmi.toFixed(1),
      bmr: bmr.toFixed(0),
      workoutPlan: workoutPlan,
    };
  };

  const handleCalculateClick = () => {
    const { bmi, bmr, workoutPlan } = calculate();
    setBmi(bmi);
    setBmr(bmr);
    setWorkoutPlan(workoutPlan);
  };

  const [bmi, setBmi] = useState("");
  const [bmr, setBmr] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState([]);

  return (
    <div className="paddinglr">
      <h2 className="blank-text" style={{ fontSize: "50px" }}>
        Workout Plan Generator
      </h2>
      <form>
        <label>
          Weight (kg)
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Height (cm)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Gender
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Fitness Goals
          <select
            value={fitnessGoals}
            onChange={(e) => setFitnessGoals(e.target.value)}
          >
            <option value="lose weight">Lose Weight</option>
            <option value="build muscle">Build Muscle</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Fitness Level
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
        <br />
        <br />
        <button type="button" onClick={handleCalculateClick}>
          Generate
        </button>
      </form>
      {bmi && bmr && (
        <div
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
          }}
        >
          <p>Your BMI is {bmi}</p>
          <p>Your BMR is {bmr} calories per day</p>
          <h3>Recommended Workout Plan:</h3>
          <ul>
            {workoutPlan.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
