import React, {useEffect, useState} from 'react';
import "./Register.css";

function Register() {
  const[email,setEmail] = useState();//Hook - manage states
  const[password,setPassword] = useState();
  const[age,setAge] = useState(13);


function handleRegister(event) {
    event.preventDefault();//onclick in button- event- do not reload the screen on calling this function
    console.log("hello world");
}
function increasingAge(event) {
  event.preventDefault();
  setAge(age+1);
}
  //useEffect-hook- its run on the screen render
useEffect (()=> {
  console.log("Age update to:",age);  //DEpendency arry- we provide this with state variables,or any variables,or any variables that are changing in nature,hit a re-render
},[age]);
// setAge(13);

// console.log(email);
// console.log(password);
//conditional rendering
// let age = 20;

  return (


    <form>
    {/* {age > 18 ? ( */}
      <div>  
        <h1>Age: {age}</h1>
        <button onClick={increasingAge}>Increase</button>      

      <input className="form" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input className="form" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
     <button onClick={handleRegister}>Click Me!</button>
    </div>
  
    {/* ): (
      <h1> You are small kid come back when u 18!</h1>
    )}
       */}
    
             </form>
  );
}

export default Register;

//conditional rendering
