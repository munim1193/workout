import ReactPlayer from "react-player";
import React, { useState } from "react";
export default function Workout() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonData) => {
    setSelectedButton(buttonData);
  };
  return (
    <>
      <div>
        <h1 className="blank-text" style={{ fontSize: "70px" }}>
          Sculpt Your Body from Head to Toe
        </h1>
        <p style={{ fontSize: "20px" }}>
          Sculpt Your Body from Head to Toe is a comprehensive fitness approach
          that targets every major muscle group in the body to tone, shape, and
          strengthen from head to toe. This method typically involves a
          combination of strength training, cardio, and flexibility exercises
          designed to maximize calorie burn, build lean muscle mass, and improve
          overall fitness. The focus is on developing a balanced physique and
          improving overall health and wellness
        </p>
        <div>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <h1>Legs Workout Training</h1>
                  <p>
                    A legs workout is an important part of any fitness routine.
                    Strong legs can help you with balance, stability, and
                    overall athleticism. There are many exercises you can do to
                    target different areas of your legs, such as squats, lunges,
                    and leg press.
                  </p>
                  <h2>Squats</h2>
                  <div>
                    <div>
                      <img
                        className="img"
                        src={
                          "https://media.istockphoto.com/id/1269882697/photo/home-workout-young-man-doing-squats-with-kettlebell-in-his-apartment.jpg?s=612x612&w=0&k=20&c=yL7a_44mnd0KAj-yWRlwl_9WSJCIh0QFnKOcZ-Pzofk="
                        }
                        alt="Squat"
                        height="300"
                        width="300"
                      />
                    </div>
                    <p>
                      Squats are a great exercise for building strength in your
                      quadriceps, hamstrings, and glutes. To perform a squat,
                      stand with your feet shoulder-width apart, toes pointing
                      forward. Bend your knees and lower your hips as if you are
                      sitting back into a chair. Keep your chest up and your
                      back straight. Then, push through your heels and stand
                      back up. Repeat for several reps.
                    </p>
                  </div>
                  <h2>Lunges</h2>
                  <div>
                    <img
                      src={
                        "https://media.istockphoto.com/id/1305034174/photo/i-take-time-to-stretch-my-legs-before-exercising.jpg?s=1024x1024&w=is&k=20&c=3hVg9ct-QYEoYQ_6WH3LxajUd9tO40uzCEOPKQOt9lk="
                      }
                      alt="Lunge"
                    />
                    <p>
                      Lunges are another effective exercise for working your
                      legs. They target your quadriceps, hamstrings, and glutes.
                      To perform a lunge, step forward with one leg and lower
                      your hips until both knees are bent at a 90-degree angle.
                      Make sure your front knee does not go past your toes.
                      Then, push through your front heel and stand back up.
                      Repeat on the other side for several reps.
                    </p>
                  </div>
                  <h2>Leg Press</h2>
                  <div>
                    <img
                      src={
                        "https://media.istockphoto.com/id/597631958/photo/man-focused-on-training-legs-on-the-machine.jpg?s=612x612&w=0&k=20&c=_Xb9Jj_7qRt2iFeEEkKEoZgEa_xgN9gtAtsdl8GiToM="
                      }
                      alt="Leg Press"
                    />
                    <p>
                      The leg press is a machine-based exercise that targets
                      your quadriceps, hamstrings, and glutes. To perform a leg
                      press, sit in the machine with your feet on the footplate.
                      Push the footplate away from you using your legs until
                      your knees are almost fully extended. Then, lower the
                      footplate back down to the starting position. Repeat for
                      several reps.
                    </p>
                  </div>
                  <p>
                    Remember to warm up before starting your legs workout and
                    stretch afterwards to prevent injury. It's also important to
                    gradually increase the weight or resistance you use to
                    challenge your muscles and continue making progress.
                  </p>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>
                  <ReactPlayer url="https://www.youtube.com/watch?v=Eg0dW1R27v4&pp=ygUSYmVzdCBsZXMgZXhlcmNpc2Vz" />
                </div>
              )
            }
          >
            Legs
          </button>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <div>
                    <h1>Chest Workout Training</h1>
                    <p>
                      A chest workout is an essential part of any fitness
                      routine. Building a strong chest can help you with pushing
                      movements, posture, and overall upper body strength. There
                      are several exercises you can do to target different areas
                      of your chest, such as the bench press, push-ups, and
                      dumbbell fly.
                    </p>
                    <h2>Bench Press</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1028273740/photo/man-during-bench-press-exercise.jpg?s=612x612&w=0&k=20&c=pTNDqP6UbgTm39u9GHFqDiH13o1cm1l4xYHBdoiSdkg="
                        }
                        alt="Bench Press"
                      />
                      <p>
                        The bench press is a classic exercise for building upper
                        body strength and mass. To perform a bench press, lie on
                        a bench with your feet flat on the ground. Grasp the bar
                        with a grip slightly wider than shoulder-width. Lower
                        the bar to your chest, keeping your elbows tucked in.
                        Push the bar back up until your arms are fully extended.
                        Repeat for several reps.
                      </p>
                    </div>
                    <h2>Push-Ups</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1094479308/photo/bi-racial-man-doing-push-ups-in-sportswear-on-fitness-mat.jpg?s=612x612&w=0&k=20&c=3W7yb-IRh0FmuIv9CDF9OfTXRTogZn6GyDitfpRVA1I="
                        }
                        alt="Push-Ups"
                      />
                      <p>
                        Push-ups are a bodyweight exercise that can be done
                        anywhere and are great for building chest and arm
                        strength. To perform a push-up, start in a plank
                        position with your hands shoulder-width apart. Lower
                        your body until your chest touches the ground, keeping
                        your elbows tucked in. Push back up to the starting
                        position. Repeat for several reps.
                      </p>
                    </div>
                    <h2>Dumbbell Fly</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1338893035/photo/an-asian-man-in-a-blue-tank-top-does-a-set-of-dumbbell-chest-flys-on-a-flat-bench-training.jpg?s=612x612&w=0&k=20&c=SMuaArpKMQeODnw5EdYqfA6-fWkeHEUvpC6oMQfsoas="
                        }
                        alt="Dumbbell Fly"
                      />
                      <p>
                        Dumbbell flys are an effective exercise for isolating
                        and building the chest muscles. To perform a dumbbell
                        fly, lie on a bench with a dumbbell in each hand. Hold
                        the weights above your chest with your palms facing each
                        other. Lower the weights to the sides, keeping a slight
                        bend in your elbows. Bring the weights back up to the
                        starting position. Repeat for several reps.
                      </p>
                    </div>
                    <p>
                      Remember to warm up before starting your chest workout and
                      stretch afterwards to prevent injury. It's also important
                      to gradually increase the weight or resistance you use to
                      challenge your muscles and continue making progress.
                    </p>
                  </div>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>

                  <ReactPlayer url="https://www.youtube.com/watch?v=qn3Ajp6P2mY&pp=ygUUYmVzdCBjaGVzdCBleGVyY2lzZXM%3D" />
                </div>
              )
            }
          >
            Chest
          </button>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <div>
                    <h1>Back Workout Training</h1>
                    <p>
                      A back workout is essential for maintaining good posture
                      and building overall strength. A strong back can also help
                      to prevent injury and improve athletic performance. There
                      are many exercises you can do to target different areas of
                      your back, such as pull-ups, rows, and deadlifts.
                    </p>
                    <h2>Pull-Ups</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1128859123/photo/rear-view-of-athletic-man-exercising-pull-ups-in-a-gym.jpg?s=612x612&w=0&k=20&c=KI9coOfWO6VLB-UecxvGzueOsjWFpxLS8Hwpvcw4z28="
                        }
                        alt="Pull-Ups"
                      />
                      <p>
                        Pull-ups are a great exercise for building strength in
                        your back, particularly in your upper back muscles. To
                        perform a pull-up, grab a pull-up bar with your palms
                        facing away from your body. Hang with straight arms,
                        then pull yourself up until your chin is above the bar.
                        Lower yourself back down with control. Repeat for
                        several reps.
                      </p>
                    </div>
                    <h2>Rows</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/661654340/photo/young-man-using-rowing-machine-in-the-gym.jpg?s=612x612&w=0&k=20&c=klOzkMPys0G1jMwdSG3XA71JiRBSmXsBSFqsmRS8T3Q="
                        }
                        alt="Rows"
                      />
                      <p>
                        Rows are another effective exercise for targeting your
                        back muscles. They can be performed with a barbell,
                        dumbbells, or a cable machine. To perform a row with a
                        barbell, stand with your feet shoulder-width apart and
                        your knees slightly bent. Hold the barbell with an
                        overhand grip and bend forward at the waist until your
                        upper body is parallel to the ground. Pull the barbell
                        up towards your chest, keeping your elbows close to your
                        body. Lower the barbell back down with control. Repeat
                        for several reps.
                      </p>
                    </div>
                    <h2>Deadlifts</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1160795384/photo/handsome-weightlifter-preparing-for-training-training-with-barbell-athletic-shirtless-young.jpg?s=612x612&w=0&k=20&c=xAJ2mXm4DeaEK9Y47VqA11FtpWtxL-r9BXJd_1aR-Ds="
                        }
                        alt="Deadlifts"
                      />
                      <p>
                        Deadlifts are a compound exercise that work multiple
                        muscle groups, including your back, legs, and core. To
                        perform a deadlift, stand with your feet shoulder-width
                        apart and your toes under the barbell. Squat down and
                        grip the bar with your hands shoulder-width apart. Keep
                        your back straight and your chest up as you stand up
                        with the bar, pulling it up along your legs until you're
                        standing fully upright. Lower the bar back down with
                        control. Repeat for several reps.
                      </p>
                    </div>
                    <p>
                      Remember to warm up before starting your back workout and
                      stretch afterwards to prevent injury. It's also important
                      to gradually increase the weight or resistance you use to
                      challenge your muscles and continue making progress.
                    </p>
                  </div>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>

                  <ReactPlayer url="https://www.youtube.com/watch?v=tSMFXqIvMHY&pp=ygUTYmVzdCBiYWNrIGV4ZXJjaXNlcw%3D%3D" />
                </div>
              )
            }
          >
            Back
          </button>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <div>
                    <h1>Abdominal Workout Training</h1>
                    <p>
                      An abdominal workout is important for building a strong
                      core, which can help with posture, balance, and stability.
                      There are many exercises you can do to target different
                      areas of your abs, such as crunches, leg raises, and
                      planks.
                    </p>
                    <h2>Crunches</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1054265964/photo/muscular-guy-doing-sit-ups-at-gym-with-other-people-in-background-young-athlete-doing-stomach.jpg?s=612x612&w=0&k=20&c=5eiN4uWdofd8-FS6chEUt8VNZmm70RUQRqMwXwSH6MM="
                        }
                        alt="Crunches"
                      />
                      <p>
                        Crunches are a classic exercise for working the rectus
                        abdominis muscle. Lie on your back with your knees bent
                        and feet flat on the ground. Place your hands behind
                        your head and lift your shoulders off the ground,
                        exhaling as you do so. Lower your shoulders back down to
                        the ground and repeat for several reps.
                      </p>
                    </div>
                    <h2>Leg Raises</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/827612374/photo/fit-man-performing-leg-raises-on-outdoor-fitness-station.jpg?s=612x612&w=0&k=20&c=xO8RPzUZGS1kPQ2QHbPwUeT41rnDnCe7zbLD_FnqDhA="
                        }
                        alt="Leg Raises"
                      />
                      <p>
                        Leg raises are a challenging exercise for the lower abs.
                        Lie on your back with your legs straight and your hands
                        at your sides. Lift your legs up to a 90-degree angle,
                        keeping them straight. Lower them back down to the
                        ground, but don't let them touch. Repeat for several
                        reps.
                      </p>
                    </div>
                    <h2>Plank</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1187354788/photo/make-time-for-the-things-that-benefit-you.jpg?s=612x612&w=0&k=20&c=jMaE554btWtWIMGEXzQfcIrSMa9MEgrNDJ55dmEDuls="
                        }
                        alt="Plank"
                      />
                      <p>
                        The plank is a great exercise for building overall core
                        strength. Start in a push-up position, with your arms
                        straight and your hands shoulder-width apart. Lower
                        yourself onto your forearms, keeping your elbows under
                        your shoulders. Your body should form a straight line
                        from your head to your heels. Hold this position for as
                        long as you can, and then rest. Repeat for several reps.
                      </p>
                    </div>
                    <p>
                      Remember to warm up before starting your ab workout and
                      stretch afterwards to prevent injury. It's also important
                      to gradually increase the intensity of your workout to
                      challenge your muscles and continue making progress.
                    </p>
                  </div>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>

                  <ReactPlayer url="https://www.youtube.com/watch?v=jZhKPgjb0yg&pp=ygUZYmVzdCBhYmRvbWluYWxzIGV4ZXJjaXNlcw%3D%3D" />
                </div>
              )
            }
          >
            Abdominals
          </button>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <div>
                    <h1>Arms Workout Training</h1>
                    <p>
                      The arms are a popular area of the body to work on for
                      many fitness enthusiasts. There are several exercises that
                      can be done to target the biceps, triceps, and forearms,
                      such as bicep curls, tricep dips, and hammer curls.
                    </p>
                    <h2>Bicep Curls</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1162337303/photo/strong-willed-bodybuilder-doing-seated-isolated-dumbbell-curl-evening-workout.jpg?s=612x612&w=0&k=20&c=N_E9pFjrnjfPcpz2vuzKZs6TSWnZoY5oWmJk4IrV-_g="
                        }
                        alt="Bicep Curl"
                      />
                      <p>
                        Bicep curls are a classic exercise for building bigger
                        biceps. To perform a bicep curl, stand with your feet
                        shoulder-width apart, hold a dumbbell in each hand, and
                        curl the weights up towards your shoulders while keeping
                        your elbows close to your body. Slowly lower the weights
                        back down to the starting position and repeat for
                        several reps.
                      </p>
                    </div>
                    <h2>Tricep Dips</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1130134993/photo/businessman-doing-triceps-dips-in-office.jpg?s=612x612&w=0&k=20&c=nOmkW-C8GsU-CIjjmEkTOaln3f8BC8rB10Gjh48QHqc="
                        }
                        alt="Tricep Dips"
                      />
                      <p>
                        Tricep dips are an effective exercise for building
                        stronger triceps. To perform a tricep dip, sit on a
                        bench or chair and place your hands behind you with your
                        fingers pointing forward. Straighten your arms and lift
                        your hips off the bench or chair. Slowly lower your body
                        down towards the floor by bending your arms and keeping
                        your elbows close to your body. Push back up to the
                        starting position and repeat for several reps.
                      </p>
                    </div>
                    <h2>Hammer Curls</h2>
                    <div>
                      <img
                        src={
                          "https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233"
                        }
                        alt="Hammer Curl"
                      />
                      <p>
                        Hammer curls are a variation of bicep curls that also
                        work the forearms. To perform a hammer curl, hold a
                        dumbbell in each hand with your palms facing your body.
                        Curl the weights up towards your shoulders while keeping
                        your elbows close to your body. Slowly lower the weights
                        back down to the starting position and repeat for
                        several reps.
                      </p>
                    </div>
                    <p>
                      Remember to warm up before starting your arms workout and
                      stretch afterwards to prevent injury. It's also important
                      to gradually increase the weight or resistance you use to
                      challenge your muscles and continue making progress.
                    </p>
                  </div>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>

                  <ReactPlayer url="https://www.youtube.com/watch?v=prJ7vF2wx6A&pp=ygUTYmVzdCBhcm1zIGV4ZXJjaXNlcw%3D%3D" />
                </div>
              )
            }
          >
            Arms
          </button>
          <button
            className="button"
            onClick={() =>
              handleButtonClick(
                <div className="workout">
                  <div>
                    <h1>Cardio Workout Training</h1>
                    <p>
                      Cardio exercise is an essential part of any fitness
                      routine. It helps to strengthen your heart, burn calories,
                      and improve your overall health. There are many different
                      types of cardio exercises you can do to get your heart
                      rate up and increase your endurance, such as running on a
                      treadmill, cycling, and jumping rope.
                    </p>
                    <h2>Treadmill Running</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1060673274/photo/working-on-his-condition.jpg?s=612x612&w=0&k=20&c=lROWWY7_ULg9E29uz06ynBuUgTIqZ170NL5PmkmdI9w="
                        }
                        alt="Treadmill"
                      />
                      <p>
                        Running on a treadmill is a great way to get your heart
                        rate up and improve your cardiovascular fitness. Start
                        by warming up at a slow pace and then gradually increase
                        your speed and incline. Keep your posture upright and
                        your feet landing lightly on the treadmill. Aim to run
                        for at least 20 minutes per session to see results.
                      </p>
                    </div>
                    <h2>Cycling</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1320185461/photo/man-exercise-by-bike-at-the-gym-make-their-thighs-strong-and-healthy.jpg?s=612x612&w=0&k=20&c=mvl-OCvNxT8mnV7_En-QAVl2G_o4YsMOPJP6SCU3f-g="
                        }
                        alt="Cycling"
                      />
                      <p>
                        Cycling is another effective way to get your heart rate
                        up and improve your cardiovascular fitness. You can
                        cycle outdoors or use a stationary bike in the gym.
                        Start at a moderate pace and then gradually increase
                        your speed and resistance. Keep your posture upright and
                        your knees in line with your feet. Aim to cycle for at
                        least 30 minutes per session to see results.
                      </p>
                    </div>
                    <h2>Jumping Rope</h2>
                    <div>
                      <img
                        src={
                          "https://media.istockphoto.com/id/1137177479/photo/jumping-rope.jpg?s=612x612&w=0&k=20&c=hOH72nP5p6mvomdQhosp-GywqgCkJDwKIphrTgcA5SY="
                        }
                        alt="Jumping Rope"
                      />
                      <p>
                        Jumping rope is a fun and effective way to get your
                        heart rate up and burn calories. Start by jumping at a
                        moderate pace and then gradually increase your speed and
                        duration. Keep your posture upright and your knees
                        slightly bent. Aim to jump rope for at least 10 minutes
                        per session to see results.
                      </p>
                    </div>
                    <p>
                      Remember to warm up before starting your cardio workout
                      and cool down afterwards to prevent injury. It's also
                      important to gradually increase the intensity and duration
                      of your workouts to challenge your body and continue
                      making progress.
                    </p>
                  </div>
                  <h1 className="blank-text">
                    Watch and learn how to perform the exercises showcased on
                    this page with our comprehensive video tutorial
                  </h1>

                  <ReactPlayer url="https://www.youtube.com/watch?v=ZJxwn2b1aZc&pp=ygUVYmVzdCBjYXJkaW8gZXhlcmNpc2Vz" />
                </div>
              )
            }
          >
            Cardio
          </button>
        </div>
        <div>
          <p>{selectedButton}</p>
        </div>
      </div>
    </>
  );
}
