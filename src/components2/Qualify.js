import React, { useReducer } from "react";

const Worth = (state, action) => {
  if (action.type === "Worth") {
    return {
      CTC: state.CTC + 1,
    };
  }
  throw Error("Invalid state");
};
function Qualify() {
  const [state, dispatch] = useReducer(Worth, { CTC: 5 });
  return (
    <div>
      <button onClick={() => dispatch({ type: "Worth" })}>
        You are worthy
      </button>
      <h3>I am worthy for :{state.CTC} LPA</h3>
    </div>
  );
}

export default Qualify;
