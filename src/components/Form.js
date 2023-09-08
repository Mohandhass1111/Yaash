import React from 'react'

const Form = () => {
    const Handlechange = (event) =>{
        console.log("Data modified");
        console.log(event.target.value);
    }
  return (
    <div style={{backgroundColor:"yellowgreen", padding:"20px", boxSizing:"border-box", textAlign:"center"}}>
        <input type='text' placeholder='Enter your Name' onChange={Handlechange}/>
        <button>Submit</button>
    </div>
  )
}

export default Form