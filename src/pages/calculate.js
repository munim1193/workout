import React, { useState } from "react";

function Calculate() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleNum1Change(event) {
    setNum1(parseInt(event.target.value));
  }

  function handleNum2Change(event) {
    setNum2(parseInt(event.target.value));
  }

  function handleAddition() {
    setResult(num1 + num2);
  }

  return (
    <div>
      <label>
        Number 1:
        <input type="number" onChange={handleNum1Change} />
      </label>
      <br />
      <label>
        Number 2:
        <input type="number" onChange={handleNum2Change} />
      </label>
      <br />
      <button onClick={handleAddition}>Add</button>
      <br />
      <label>Result: {result}</label>
    </div>
  );
}

export default Calculate;