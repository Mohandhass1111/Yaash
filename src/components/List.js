import React from 'react'

const List = () => {
    const Arr = [{id:"A1", detail:"Angular"},
        {id:"A2", detail:"React"},
        {id:"A3", detail:"Vue"},
        {id:"A4", detail:"Express"}];
  return (
    <div>
        <ul>
            {
                Arr.map(data=>(
                    <li key={data.id}>{data.detail}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default List