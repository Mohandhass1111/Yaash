import React, { useEffect, useRef, useState } from 'react'

function UseRef3() {
    const [Inputvalue, setInputvalue] = useState("");
    const PreviousInputValue = useRef("");

    useEffect(()=>{PreviousInputValue.current = Inputvalue;});
  return (
    <div style={{backgroundColor:"greenyellow", textAlign:"center", marginTop:"14px", padding:"4px", fontFamily:"serif"}}>
        <input type="text" value={Inputvalue} onChange={(e)=>{setInputvalue(e.target.value)}} 
        style={{margin:"18px 0px 6px 0px",border:"none", borderRadius:"12px", boxSizing:"initial", padding:"2px 26px 2px 26px"}}/>
        <h5>Current value : {Inputvalue}</h5>
        <h5>Previous value:{PreviousInputValue.current}</h5>
    </div>
  )
}


export default UseRef3