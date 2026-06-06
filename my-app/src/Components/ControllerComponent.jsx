import React from 'react'
import { useState } from 'react'

function ControllerComponent() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (
    <>
        <h1>Controller Component</h1>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter Your Name' />
        <br /><br />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter Your Password' />
        <br /><br />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Your Email' />
        <br /><br />

        <button>Submit</button>
        <button onClick={()=>{setName('');setPassword('');setEmail('')}}>Reset</button>

        <h1>{name}</h1>
        <h1>{password}</h1>
        <h1> {email}</h1>
   
    </>
  )
}

export default ControllerComponent