import React, { useReducer } from "react";

function redFunc(state, action) {
  if (action.type === "e_salary") {
    return {
      salary: state.salary + 15000,
    };
  }
}
function Reducer1() {
  const [state, dispatch] = useReducer(redFunc, { salary: 40000 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "e_salary" })}>Hike</button>
      <p>Your salary is:{state.salary}</p>
    </div>
  );
}

export default Reducer1;
