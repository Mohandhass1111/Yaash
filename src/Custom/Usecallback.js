import React from "react";
import ListItems from "./ListItems";

function Usecallback() {
  const [number, setNumber] = React.useState(1);
  const [dark, setdark] = React.useState(false);
  const getitems = () => {
    return [number, number + 1, number + 2];
  };
  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={theme}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setdark((predark) => !predark)}>Toggle</button>
      <ListItems getitems={getitems} />
    </div>
  );
}

export default Usecallback;
