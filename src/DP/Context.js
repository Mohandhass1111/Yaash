import React, { useContext, useState } from "react";

const Employeecontext = React.createContext();
function Context() {
  const [Employee] = useState({
    name: "Mohandhass",
    role: "full stack developer",
    salary: "65000",
    Experience: "fresher",
    Location: "Bangalore",
  });
  return (
    <Employeecontext.Provider value={Employee}>
      <Name />
      <Place />
    </Employeecontext.Provider>
  );
}
function Name() {
  const context = useContext(Employeecontext);
  return (
    <div>
      <p>Employee name:{context.name}</p>
      <p>Employee role:{context.role}</p>
    </div>
  );
}
function Place() {
  const context = useContext(Employeecontext);
  return (
    <div>
      <p>Employee salary:{context.salary}</p>
      <p>Employee Experience:{context.Location}</p>
      <p>Employee Location:{context.Experience}</p>
    </div>
  );
}
export default Context;
