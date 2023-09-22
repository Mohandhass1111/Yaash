import React, { useCallback, useState } from "react";
import Title from "./Title";

function UseCallback() {
  const [Salary, IncrementSalary] = useState(20000);
  const HandleClick = useCallback(() => {
    IncrementSalary(Salary + 2000);
  }, [Salary]);
  return (
    <div>
      <Title />
      <button onClick={HandleClick}>Touch the btn</button>
      <>{Salary}</>
    </div>
  );
}

export default UseCallback;
