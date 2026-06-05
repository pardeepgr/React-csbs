import React from 'react'

function PropWrappper({ children}) {
  return (

    <div style={{color:'green',border:'2px solid red',width:'400px',height:'200px'}}>
        {children}
    </div>
  )
}

export default PropWrappper