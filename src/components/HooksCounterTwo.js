import React,{useEffect, useState} from 'react'    
const HooksCounterTwo = () => {
    const initialize = 0
    const [count,setCount] = useState(initialize)
    useEffect(()=>{console.log("Successfully rendered")},[count]);
    function IncrementFive(){
        for (let i=1;i<=5;i++)
        setCount(precount=>precount+1);
    }
  return (
    <div style={{backgroundColor:"deeppink", marginBottom:"16px", paddingBottom:"20px", textAlign:"center"}}>
        <h5 style={{paddingBottom:"8px"}}>Count : {count}</h5>
        <button onClick={()=>setCount(initialize)}
         style={{backgroundColor:"rgb(0,128,0)", marginRight:"8px", padding:"6px 18px 10px 18px",color:"whitesmoke" ,fontWeight:"bold" ,border:"none",borderRadius:"6px",marginBottom:"12px"}}>Reset</button>
        <button onClick={()=>setCount(precount=>precount+1)}
         style={{backgroundColor:"rgb(0,128,0)", marginRight:"8px", padding:"6px 18px 10px 18px",color:"whitesmoke" ,fontWeight:"bold" ,border:"none",borderRadius:"6px",marginBottom:"12px"}}>Increment</button>
        <button onClick={()=>setCount(precount=>precount-1)}  
        style={{backgroundColor:"rgb(0,128,0)",marginRight:"8px",  padding:"6px 18px 10px 18px",color:"whitesmoke" ,fontWeight:"bold" ,border:"none",borderRadius:"6px",marginBottom:"12px"}}>Decrement</button>
        <button onClick={IncrementFive} 
         style={{backgroundColor:"rgb(0,128,0)", padding:"6px 18px 10px 18px",color:"whitesmoke" ,fontWeight:"bold" ,border:"none",borderRadius:"6px",marginBottom:"12px"}}>Increment5</button>
    </div>
  )
}

export default HooksCounterTwo