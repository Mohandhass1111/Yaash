import React, { useContext, useState } from 'react'

export const Register = React.createContext();

function ContextComp2() {
    const [SignedIn , setSignedIn] = useState(false);
  return (
    <Register.Provider value={[SignedIn, setSignedIn]}>
      <h4>{!SignedIn ? 'Sign in': 'Sign out'}</h4>
        <Btn/>
    </Register.Provider>
  )
}

function Btn(){
    const [SignedIn, setSignedIn] = useContext(Register);
    return(
      <div style={{textAlign:"center"}}>
        <button onClick={()=>setSignedIn(!SignedIn)} 
        style={{backgroundColor:"darkmagenta", color:"white", fontWeight:"bold", border:"none", padding:"6px 16px 8px 16px", marginTop:"14px", borderRadius:"4px"}}>
          {SignedIn ? 'Sign in': 'Sign out'}
          </button>
          </div>
    )
}

export default ContextComp2