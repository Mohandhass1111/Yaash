import React, { useContext, useState } from 'react'

const Pass = React.createContext();

function Contextcomp1() {
  const [channel] = useState("SUN TV");
  return (
    <Pass.Provider value={[channel]}>
    <Comp2/>
    </Pass.Provider>
  )
}
function Comp2(){
  return(
  <>
  <Comp3/>
  </>
  );
}
function Comp3(){
  const [channel] = useContext(Pass);
  return(
  <p> {channel} is Asia no 1 channel</p>
  );
}

export default Contextcomp1