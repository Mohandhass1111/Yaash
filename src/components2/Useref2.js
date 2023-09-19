import React, { useState } from "react";

function Useref2() {
  const [Name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Your name is : {Name}</h3>
    </div>
  );
}

export default Useref2;
