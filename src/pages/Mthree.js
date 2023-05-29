import React, { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [food, setFood] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setFood(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=cc9e68b2&app_key=600f6df8d4a5b7b15e15feb938f27e75`
      );

      const data = await response.json();
      setNutritionData(data.hints);
    } catch (error) {
      console.error("Error:", error);
      setNutritionData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="grid-container">
          <div className="c1">
            <h1 className="h1">
              <span className="blank-text">Food </span> Nutrition{" "}
              <span className="blank-text">Calculator</span>
            </h1>
            <br />
            <br />
            <p className="p1">
              Track and analyze your daily nutrient intake with ease using a
              food nutrition calculator.
            </p>
            <br />
            <br />
          </div>
          <div className="c2">
            <h2>Benefits of exercesis</h2>
            <p>
              A food nutrition calculator is an online tool that helps users to
              calculate the nutritional information of the food they eat. With
              this tool, you can input the type and quantity of food consumed
              and receive detailed information about the macronutrients (such as
              protein, carbohydrates, and fats), micronutrients (such as
              vitamins and minerals), calories, and other nutritional components
              of the food.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={food}
            onChange={handleInputChange}
            placeholder="Enter a food item"
            required
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button type="submit">Search</button>
          </div>
        </form>
        <div
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            paddingLeft: "20%",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            
          }}
        >
          {loading && <p>Loading...</p>}

          {nutritionData && (
            <div>
              <h2>Nutrition Information:</h2>
              <ul>
                {nutritionData.map((item, index) => (
                  <li key={index}>
                    <p>Food: {item.food.label}</p>
                    <p>Calories: {item.food.nutrients.ENERC_KCAL}</p>
                    <p>Fat: {item.food.nutrients.FAT}</p>
                    <p>Sugar: {item.food.nutrients.SUGAR}</p>
                    <p>Carbs: {item.food.nutrients.CHOCDF}</p>
                    <p>Protein: {item.food.nutrients.PROCNT}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
