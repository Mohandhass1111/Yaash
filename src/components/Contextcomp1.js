import React, { useState, useContext } from 'react'

const context = React.createContext();

function Contextcomp1() {
    const [Team,setTeam] = useState('Yaash school');
  return (
    <context.provider value={{Team}}>
        <p>component priority 1</p>
        <ChildA/>
    </context.provider>
  )
}
function ChildA(){
    return <>
     <p>component priority 2</p>
     <ChildB/>
    </>
}

function ChildB(){
    return<>
    <p>component priority 3</p>
    </>
}
export default Contextcomp1