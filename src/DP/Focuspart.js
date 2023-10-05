import React, { useRef } from "react";

function Focuspart() {
  const inputref = useRef(null);
  const HandleClick = () => {
    inputref.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={HandleClick}>Focus</button>
    </div>
  );
}

export default Focuspart;
