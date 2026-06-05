import { useState } from 'react'
import './App.css'
import User from './User'
import College from './College'
import PropWrappper from './PropWrappper'
import Alert from './Alert'

function App() {

  // let userObject1 = {
  //   name: 'Pardeep',
  //   age: 27,
  //   email: "pardeep@gmail.com"
  // }

  // let userObject2 = {
  //   name: 'Daleep',
  //   age: 25,
  //   email: "daleep@gmail.com"
  // }

  // let userObject3 = {
  //   name: 'Vishal',
  //   age: 20,
  //   email: "vishal@gmail.com"
  // }

  // let collegeList = [ 'DU', 'NIT', 'IIT', 'DU', 'NIT']

/***************************************************************** */
  const [val, setVal] = useState("PPardeep")

  return (
    <>

      <h1>Get Input Value</h1>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder='Enter Your Name' />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear Value</button>

      {/* <h1>Props in React Js</h1>

      <PropWrappper>
        <h1>Hi Everyone</h1>  
      </PropWrappper>
      
      <Alert 
      icon={<span>⚠️</span>}
      message="Something went wrong" /> */}
      
      {/* <User user={userObject1}  />
      <User user={userObject2}  />
      <User user={userObject3}  />
      <College college={collegeList} /> */}
    </>
  )
}

export default App
