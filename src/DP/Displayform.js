import React, { useReducer } from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { CTC: state.CTC + 1 };
    case "NamedAction":
      return { name: action.yourname, CTC: state.CTC };
    default:
      return state;
  }
}

const initial = { name: "", CTC: 10 };

function Displayform() {
  const [state, dispatch] = useReducer(Reducer, initial);

  function handleInputChange(e) {
    dispatch({ type: "NamedAction", yourname: e.target.value });
  }

  function handlePackage() {
    dispatch({ type: "increment" });
  }

  return (
    <div>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handlePackage}>Increment</button>
      <p>Name: {state.name}</p>
      <p>You are eligible for {state.CTC + "lpa"}</p>
    </div>
  );
}

export default Displayform;
