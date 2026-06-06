import React from 'react'

function LoopsWMap() {

    const userName = [
        {
            name: "Pardeep",
            age: 27,
            email: "pardeep@gmail.com",
            id: 1
        },
        {
            name: "Daleep",
            age: 25,
            email: "daleep@gmail.com",
            id: 2
        },
        {
            name: "Vishal",
            age: 20,
            email: "vishal@gmail.com",
            id: 3
        }
        
    ]
  return (
    <div>
        <h1>Loops in JSX With Map function</h1>

        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {userName.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        {/* -------------------------------------------------------------------- */}
        <h1 >Dummy Data</h1>
        <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Pardeep</td>
                <td>27</td>
                <td>pardeep@gmail.com</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Daleep</td>
                <td>25</td>
                <td>daleep@gmail.com</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Vishal</td>
                <td>20</td>
                <td>vishal@gmail.com</td>
            </tr>
        </tbody>
        </table>
        


    </div>
  )
}

export default LoopsWMap