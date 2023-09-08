import React from 'react'

// const Ternary = () => {
//     
//   return (
//     <div>
//         {value?(<p>Super</p>):(<p>Not worthy</p>)}
//     </div>
//   )
// }
const Ambs = ()=>{
    let value  = true;
    return value && <p>Super</p>
}

export default Ambs