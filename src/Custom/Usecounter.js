import { useState } from "react";

function UseCounter(Initial = 0) {
  const [Count, setCount] = useState(Initial);
  const Increment = () => {
    setCount((pc) => pc + 5);
  };
  const Decrement = () => {
    setCount((pc) => pc - 5);
  };
  const Multiply = () => {
    setCount((pc) => pc * 3);
  };
  return [Count, Increment, Decrement, Multiply];
}

export default UseCounter;
