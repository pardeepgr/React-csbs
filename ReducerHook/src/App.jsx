import { useReducer } from "react"

const initialState = {
  name: '',
  password: '',
  email: '',
  phone: '',
  address: ''
}

const reducer = (data, action) => {
  return {
    ...data,
    [action.type]: action.val
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <>
      <h1>Reducer Hook</h1>
      <br /> <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type: 'name'})} placeholder="Enter name" />
      <br /> <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type: 'password'})} placeholder="Password" />
      <br /> <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type: 'email'})} placeholder="enter email" />
      <br /> <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type: 'phone'})} placeholder="enter phone number" />
      <br /> <br />
      <input type="text" onChange={(event) => dispatch({val:event.target.value, type: 'address'})} placeholder="enter address" />
      <br /> <br />
      <button>Add details</button>

      <h1>{state.name}</h1>
      <h1>{state.password}</h1>
      <h1>{state.email}</h1>
      <h1>{state.phone}</h1>
      <h1>{state.address}</h1>

    </>
  )
}

export default App
