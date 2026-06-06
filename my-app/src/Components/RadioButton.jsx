import React, { useState } from 'react'

function RadioButton() {
    const [gender, setGender] = useState('male');
    const [country, setCountry] = useState('India');

    const changeGender = (event) => {
        setGender(event.target.value)
    }

    const changeCountry = (event) => {
        setCountry(event.target.value)
    }
  return (
    <form style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h1>RadioButton</h1>
        <h2>Select Gender : </h2>
        {/* Option 1 */}
        <label>
            <input 
            type="radio" 
            onChange={changeGender} 
            id="male" 
            name="gender" 
            value="male" 
            checked={gender === "male"}
        />
            Male
        </label>
        {/* Option 2 */}
        <label>
            <input 
            type="radio" 
            onChange={changeGender} 
            id="female" 
            name="gender" 
            value="female" 
            checked={gender === "female"}
        />
            Female
        </label>
        {/* Option 3 */}
        <label>
            <input 
            type="radio" 
            onChange={changeGender} 
            id="other" 
            name="gender" 
            value="other" 
            checked={gender === "other"}
        />
            Other
        </label>

        <br />
        <br />

        <h2>Select Country</h2>
        <label >
            <select value={country} onChange={changeCountry}>
                <option value="India">India</option>
                <option value="Usa">USA</option>
                <option value="Japan">JAPAN</option>

            </select>
        </label>

        <h2>Selected Gender : {gender}</h2> <h2>Selected Country : {country}</h2>
    </form>
  )
}

export default RadioButton