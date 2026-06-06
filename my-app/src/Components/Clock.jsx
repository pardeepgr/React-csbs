import React, { useEffect, useState } from 'react'

function Clock() {
    const [time,setTime] = useState(0);
    const [color,setColor] = useState('red');

    useEffect(() => {
        setInterval(()=> {
            setTime(new Date().toLocaleTimeString())
        },1000)
    })
  return (

    <div>
        <h1>CLock</h1>
        <select onChange={(e) => {setColor(e.target.value)}}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
        </select>
        <h1 style={{color:color,backgroundColor:'#0f1a0f',margin:5,padding:5,borderRadius:10}}>{time}</h1>

    </div>
  )
}

export default Clock