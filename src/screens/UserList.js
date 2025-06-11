import React from 'react'

function UserList() {
    let data = [
        {
            name:"Aman",
            email:"aman@gmail.com",
            rollno:"1",
        },

        {
            name:"Angel",
            email:"angel@gmail.com",
            rollno:"2",
        },

        {
            name:"Ayush",
            email:"ayush@gmail.com",
            rollno:"21",
        }
    ]
  return (
    <div>
      {data.map(({name, email, rollno})=>(
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{rollno}</p>
        </div>
        ))}
    </div>
  );
}

export default UserList;
