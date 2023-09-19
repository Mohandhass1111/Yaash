import React, { useRef } from 'react'

function UseRef2() {
    const Text = useRef(0);
    const FocusIn = () =>{
        Text.current.focus();
    }
  return (
    <div style={{textAlign:"center", marginTop:"16px"}}>
        <input type="text" ref={Text}/>
        <span style={{marginRight:"20px"}}></span>
        <button onClick={FocusIn}
         style={{border:"none", backgroundColor:"indigo", padding:"3px 14px 3px 14px", color:"whitesmoke", fontWeight:"450"}}>FocunOnInput</button>
    </div>
  )
}

export default UseRef2