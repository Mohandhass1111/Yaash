import React from 'react'

const Lists = () => {
    const Fullstack =["HTML","CSS","JAVASCRIPT","NODEJS","MONGODB"];
    const lib = ["None","Bootstrap","React","Express","None"];
  return (
    <div>
        <h3 style={{color:"crimson"}}>What you really need</h3>
        <ul style={{color:"darkcyan",fontWeight:"bold"}}>
            {Fullstack.map((tool,index)=>(
            <li key={index}>{tool}-{lib[index]}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lists