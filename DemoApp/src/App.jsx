
import { useActionState } from 'react';
import './App.css'

export default function App() {

  const handleLogin = (prevData, formData) => {
    let name = formData.get('username');
    let pass = formData.get('password');
    console.log('Login button clicked', name, pass);

    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!name || name.length > 10){
      return {error: ' Name should not be empty or contain more then 10 characters. ',name,pass}
    }else if (!regex.test(pass)){
      return {error: 'Password can contain one Uppercase, one Lowercase, digits and minimum 8 characters',name,pass}
    }else {
      return {message: 'Login Done',name,pass}
    }

  }

  const [data, action, pending ] = useActionState(handleLogin);

  return (
    <>
    <div>
      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      <form action={action}>
          <input defaultValue={data?.name} type="text" name="username" placeholder='Enter your UserName' />
          <br />
          <input defaultValue={data?.pass} type="password" name="password" placeholder='Enter your Password' />
          <br />
          <button>Login</button>
      </form>
    </div>
         
    </>
  )
  
}
