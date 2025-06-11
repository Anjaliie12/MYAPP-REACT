import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';

const expensiveCalculation = (num) => {
    console.log("Calculation...");
    for (let i = 0; i < 1000000000; i++){
        num += 1;
       }
       //api call, calculation
       return num;
}
function RegisteruseMemo() {
    const [count, setCount]=useState(0);
    const [toms, setToms]=useState([]);
    //const calculation = expensiveCalculation();
    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    //MEmoization - It is sorting this inside a cache

    //todos-Array-map- access every single element and then use it to display a component or a screen.

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTom = () => {
        setToms((t) => [...t, "Tom task"]);
    };

  return (
    <div>
        <div>
            <h1>My Toms</h1>
            {toms.map((tom, index) =>{
                return <p key={index}>{tom}</p>;
            })}
            <button onClick={addTom}>Add Tom</button>
        </div>
        <hr/>
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
        {/* <button> Take me user list </button> */}
        <Link to="/UserList">Take me to user list</Link>
    </div>
  );
}

export default RegisteruseMemo;
