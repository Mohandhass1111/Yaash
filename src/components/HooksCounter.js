import React, { useState } from 'react'

const HooksCounter = () => {
    const[count,setCount]= useState(0);
    const[count2,setCount2]=useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count+1)}  style={{backgroundColor:"crimson", margin:"0px 6px 4px 0px"}}>TOUCH-to-APPEND{count}</button>
        <button onMouseEnter={()=>setCount2(count2-1)}  style={{backgroundColor:"Deeppink"}}>To decrease {count2}</button>
    </div>
  )
}

export default HooksCounter