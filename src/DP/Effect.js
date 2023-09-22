import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount((c) => c + 1);
    }, 500);
  });
  return (
    <div
      style={{
        backgroundColor: "tomato",
        fontFamily: "mooli",
        width: "500px",
        textAlign: "center",
        margin: "0 auto",
      }}
    >
      <p>I have rendered {count} times</p>
    </div>
  );
}

export default Effect;
