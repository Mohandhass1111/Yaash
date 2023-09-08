import React, { useState } from 'react'

function HooksCounterThree() {
    const [goal, setgoal] = useState({mgoal:'',sgoal:''})
  return (
    <div>
        <form style={{backgroundColor:"Magenta", textAlign:"center", margin:"6px 0px 4px 0px"}}>
            <input type="text" value={goal.mgoal} onChange={e=>setgoal({...goal,mgoal:e.target.value})}/>
            <input type="text" value={goal.sgoal} onChange={e=>setgoal({...goal,sgoal:e.target.value})}/>
            <p>Your first priority is:{goal.mgoal}</p>
            <p>Your second priority is:{goal.sgoal}</p>
        </form>
    </div>
  )
}

export default HooksCounterThree