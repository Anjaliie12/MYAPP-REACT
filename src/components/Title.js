import React from 'react'

//code optimization tips
//1. props- is object

function Title({name,contactNumber,schoolName,collegeName}) {
  return (
    <div>
      <h1 style={{ fontSize:50, color:"red"  }}>{name}</h1>
      <h1 style={{ fontSize:50, color:"red"  }}>{contactNumber}</h1>
      <h1 style={{ fontSize:50, color:"red"  }}>{schoolName}</h1>
      <h1 style={{ fontSize:50, color:"red"  }}>{collegeName}</h1>
    </div>
  )
}

export default Title
