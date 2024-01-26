import React from 'react'

const Item = ({data,removeitem}) => {
   
  return (
    <div>
        <ul>
      {
        data.map((el,index)=>{
            return(
                <li key={index}>
                {el}
                <button onClick={()=>removeitem(index)}>
                    Remove
                </button>
                </li>
            )

        })
      }
        </ul>

    </div>
  )
}

export default Item
