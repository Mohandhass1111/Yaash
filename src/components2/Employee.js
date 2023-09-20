import React, { useReducer } from "react";
const Initial = { Name: "", Lang: "", Cost: "" };
const Reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: "Mohandhass" + action.value };
    case "Lang":
      return { ...state, Lang: "English" + action.value };
    case "Cost":
      return { ...state, Cost: "10LPA" + action.value };
    default:
      return state;
  }
};
function Employee() {
  const [state, dispatch] = useReducer(Reducer, Initial);
  return (
    <div style={{ backgroundColor: "Turquoise" }}>
      <h1>Employee</h1>
      <button onClick={() => dispatch({ type: "Name", value: " 😁 " })}>
        Name
      </button>
      <button onClick={() => dispatch({ type: "Lang", value: "😅" })}>
        Lanuage
      </button>
      <button onClick={() => dispatch({ type: "Cost", value: "🥳" })}>
        Package
      </button>
      <p>Name:{state.Name}</p>
      <p>Language known:{state.Lang}</p>
      <p>CTC:{state.Cost}</p>
    </div>
  );
}

export default Employee;
