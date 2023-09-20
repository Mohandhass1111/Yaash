import React, { useReducer } from "react";

function CounterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
function UseReducer() {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });
  return (
    <div>
      <h3>UseReducer</h3>
      <h4>Count :{state.count}</h4>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default UseReducer;
