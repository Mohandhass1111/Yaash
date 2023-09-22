import React from "react";
import UseCounter from "./Usecounter";

function Counter1() {
  const [Count, Increment, Decrement, Multiply] = UseCounter(10);
  return (
    <div>
      <button onClick={Increment}>Increment by 5</button>
      <button onClick={Decrement}>Decrement by 5</button>
      <button onClick={Multiply}>Multiply by 3</button>
      <h5>Count :{Count}</h5>
    </div>
  );
}

export default Counter1;
