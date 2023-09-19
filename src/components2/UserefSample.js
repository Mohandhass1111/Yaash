import React, { useEffect, useRef } from "react";

function UserefSample() {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" placeholder="type something..." ref={inputref} />
    </div>
  );
}

export default UserefSample;
