import React from 'react'

export const p_c_d = () => {
  return (
    <div>
    <form>
        <label> Weight (KG) </label>
        <input type="number" id="weight" placeholder="45" />

        <label> Height (cm) </label>
        <input type="number" id="height" placeholder="150" />

        <button>Submit</button>
      </form>

      <div class="result"></div>
      const weight = document.getElementById("weight");
      const height = document.getElementById("height");
      const result = document.querySelector(".result");

      const form = document.querySelector("form");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const weightVal = weight.value;
        const heightVal = height.value / 100;
        const bmi = weightVal / (heightVal * heightVal);
        result.textContent = parseFloat(bmi).toFixed(2);
      });
      </div>
  )
}
