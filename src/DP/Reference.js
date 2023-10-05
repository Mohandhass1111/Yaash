import React, { useRef } from "react";

function Reference() {
  const ref = useRef(0);
  const HandleClick = () => {
    ref.current++;
    alert("You clicked" + ref.current + "times");
  };

  return (
    <div>
      <button onClick={HandleClick}>Click me</button>
    </div>
  );
}

export default Reference;
