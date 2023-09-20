import React, { useMemo, useState } from "react";

function ClacFactorial() {
  const [Number, setNumber] = useState(0);
  const Factorial = useMemo(() => {
    let result = 1;
    for (let i = 1; i <= Number; i++) {
      result *= i;
    }
    return result;
  }, [Number]);
  const HandleClick = (e) => {
    setNumber(parseInt(e.target.value, 10));
  };
  return (
    <div style={{ backgroundColor: "mediumspringgreen" }}>
      <h2>FactorialCalculator</h2>
      <label>
        Enter the number:
        <input type="Number" value={Number} onChange={HandleClick} />
        <p>
          The factorial of {Number} is: {Factorial}
        </p>
      </label>
    </div>
  );
}

export default ClacFactorial;
