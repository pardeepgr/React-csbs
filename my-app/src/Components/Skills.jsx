import React from 'react'
import { useState } from 'react'

function Skills() {

    const [skills, setSkills] = useState([])
    

    const handleChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        console.log(value,isChecked)
        if(isChecked) {
            setSkills([...skills, value])
        } else {
            setSkills([...skills.filter(item => item != value)])
        }
    }
    
    

    return (
        <div>
            <h1>Handle Checkbox ReactJs</h1>
        
            <h3>Skills</h3>
            <input type="checkbox" onChange={handleChange} id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleChange} id="react" value='react' />
            <label htmlFor="react">REACT</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleChange} id="js" value='js' />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleChange} id="java" value='java'/>
            <label htmlFor="java">Java</label>
            
            <h1>{skills.toString()}</h1>
        </div>

        
    )
}

export default Skills