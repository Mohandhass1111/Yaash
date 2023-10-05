import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount((c) => c + 1);
    }, 1000);
  });
  return (
    <div
      style={{
        backgroundColor: "tomato",
        fontFamily: "mooli",
        width: "130px",
        height: "130px",
        borderRadius: "200px",
        textAlign: "center",
        margin: "0 auto",
        fontSize: "16px",
      }}
    >
      <p style={{ display: "inline-block" }}>
        I <br></br>have <br></br>rendered<br></br>
        <span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>
          {count}
        </span>{" "}
        <br></br>times
      </p>
    </div>
  );
}

export default Effect;
