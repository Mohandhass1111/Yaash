import React from 'react'

const HandleClick = () => {
    const MouseClick=()=>
    {
        alert("You preseend the button");
    }
    const ClicktoGreet=(name)=>{
        alert("Thank you for clicking me " +name);
    }
  return ( 
    <div>
        <button onClick={MouseClick}>Touch me</button> 
        <button onClick={()=>ClicktoGreet('Mohandhass')}> Click me to get Greetings</button>
    </div>
  );
  
}

export default HandleClick