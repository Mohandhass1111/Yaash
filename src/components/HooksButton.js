import React, { useState } from 'react'

function HooksButton() {
    const [button,setButton] = useState('');
    const positiveButton=()=>{
        setButton('You cliked the Positive button 😀');
    }
    const negativeButton=()=>{
        setButton('You cliked the Negative button 👎');
    }
  return (
    <div style={{backgroundColor:'darkblue', height:"100px", paddingTop:"12px", textAlign:"center"}}>
        <button onClick={positiveButton}
         style={{backgroundColor:"darkcyan", padding:"6px 19px 6px 19px", color:"whitesmoke", fontWeight:"bold", border:"none", marginRight:"8px", borderRadius:"6px", marginBottom:"6px"}}>
            Positive</button>
        <button onClick={negativeButton} 
        style={{backgroundColor:"darkmagenta", padding:"6px 18px 6px 18px",color:"whitesmoke" ,fontWeight:"bold" ,border:"none",borderRadius:"6px",marginBottom:"12px"}}>
            Negative</button>
        <p style={{fontFamily:"sans-serif", color:"GrayText"}}>{button}</p>
    </div>
  )
}

export default HooksButton