import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [Render, setRender] = useState("");
    const count = useRef(0);
    useEffect(()=>{count.current = count.current + 1;})

  return (
    <div style={{textAlign:"center", marginTop:"18px"}}>
        <input type="text" value={Render} onChange={(e)=>setRender(e.target.value)}/>
        <span style={{marginLeft:"8px", fontSize:"18px", fontWeight:"bold", color:"darkred"}}>Render count : {count.current}</span>
    </div>
  )
}

export default UseRef