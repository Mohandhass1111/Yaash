import React, { useEffect, useRef, useState } from "react";

function Useref2() {
  const [Name, setName] = useState("");
  const renderCount = useRef(1);
  const NameRef = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    NameRef.current = Name;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Fullname"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Your name is : {Name}</h3>
      <h3>your previous name is: {NameRef.current}</h3>
      <h4>This text box is rendered {renderCount.current} times</h4>
    </div>
  );
}

export default Useref2;
