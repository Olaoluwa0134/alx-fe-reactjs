import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  function handleIncreaseCounter() {
    setCounter(count + 1);
  }

  function handleDescreaseCounter() {
    setCounter(count - 1);
  }

  function handleResetCounter() {
    setCounter(0);
  }

  return (
    <>
      <p>The current count is {count}</p>
      <button onClick={handleIncreaseCounter}>Increase</button>
      <button onClick={handleDescreaseCounter}>Decrease</button>
      <button onClick={handleResetCounter}>Reset</button>
    </>
  );
};

export default Counter;
