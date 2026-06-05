import { useState } from 'react'

export default function SimpleValidation() {
  
  const [name, setName] = useState('');
  const [nameError, setnameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    if (event.target.value.length > 10) {
      setnameError('Username cannot be more than 10 characters');
    }else {
      setnameError('');
    }
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
    let regex = /^[a-zA-Z0-9]{8,10}$/
    if (regex.test(event.target.value) === false) {
      setPasswordError('Password must be 8-10 characters and contain only letters and numbers');
    }else {
      setPasswordError('');
    }
  }


  return (
    <>
      <h1>Hello from DemoApp</h1>

      <input value={name} className={nameError?'error':''} onChange={handleName} type="text" name="username" placeholder='Enter your UserName' />
      <span className='red-color'>{nameError && nameError}</span>
      <br />
      <input value={password} className={passwordError?'error':''} onChange={handlePassword} type="password" name="password" placeholder='Enter your Password' />
      <span className='red-color'>{passwordError && passwordError}</span>
      <br />
      <button disabled={nameError || passwordError} >Login</button>
    </>
  )
}

