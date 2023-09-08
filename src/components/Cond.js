import React from 'react'

const Cond = () => {
    let stats = false;
    if(stats){
  return (
    <div>
        <h4>Hello , you logged successfully!</h4>
    </div>
  )
    }
    else{
        return(
            <div>
                <h4>You not logged in!</h4>
            </div>
        )
    }
}

export default Cond