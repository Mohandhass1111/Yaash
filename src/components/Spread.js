import React from 'react'

function Spread() {
  const name =["Mohan"];
  const lname = ["dhass"];
  const fname = [...name , ...lname];
  const num1 =[1,1,1,1];
  const num = [...num1,369];
  return (
    <div>
      <p>{fname}</p>
      <p>{num}</p>
    </div>
  )
}

export default Spread