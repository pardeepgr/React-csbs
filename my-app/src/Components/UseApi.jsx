import React from 'react'
import { use } from 'react';
import { Suspense } from 'react';

const fetchData = fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((res)=> res.json());

const userResponse = fetchData.then((data) => {
    return data;
});

function UseApi() {
  return (
    <>
        <h1>UseApi</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Users userResponse={userResponse} />
        </Suspense>
    </>

  )
}

const Users = ({userResponse}) => {
    // console.log(userResponse);
    const userData = use(userResponse);
    console.log(userData);
    
    return (
        <>
        <h1>User List</h1>
        <ul>
            {userData.map((user) => (
                <li key={user.id}>{user.title}</li>
            ))}
        </ul>
        </>
        
    )
}


export default UseApi