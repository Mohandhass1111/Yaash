import React, { useContext, useState } from 'react'

export const Register = React.createContext();

function ContextComp3() {
    const [LogedIn, setLogenIn] = useState(true);
  return (
    <div style={{textAlign:"center", marginTop:"20px", backgroundColor:"seagreen", paddingTop:"6px",paddingBottom:"6px", color:"white"}}>
    <Register.Provider value = {[LogedIn, setLogenIn]}>
        <h4 style={{ display:"inline-block", fontFamily:"serif"}}> 
            { LogedIn?  (<> You successfully <span style={{color:"deeppink", fontWeight:"bold"}}>Logout</span>
            .Please login </>) :(<>You successfully <span style={{color:"deeppink", fontWeight:"bold"}}>Login</span>.Please logout</>) }
              </h4>
        <Button/>
    </Register.Provider>
    </div>
  )
}
function Button(){
    const [LogedIn, setLogenIn] = useContext(Register);
    return(
        <div style={{textAlign:"center"}} >
    <button onClick={()=>setLogenIn(!LogedIn)} style={{display:"inline-block", margin:"fixed", backgroundColor:"Turquoise", color:"white", fontWeight:"bold", padding:"6px 22px 8px 22px", border:"none", borderRadius:"18px"}}>{LogedIn?  'Login': 'Logout'}</button>
    </div>
    );
}
export default ContextComp3