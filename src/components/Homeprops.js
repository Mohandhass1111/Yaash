import React from 'react'

const Homeprops = (props) => {
  return (
    <div>
        <h2>I build a new house in my 20"s</h2>
        <p>Range : {props.sq_fit} {props.type}</p>
        <p>Builders : {props.builders}</p>
        <p>City : {props.city}</p>
    </div>
  )
}

export default Homeprops