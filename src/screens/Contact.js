import React from 'react' //Hooks,stateless App
import store from '../store/store';
import { incrementByAmount } from '../store/reducer';
// import Register from './Register';
// import RegisteruseMemo from './RegisteruseMemo';
//import UserList from './UserList';

const Contact = () => {
  

  return <button onClick={()=> store.dispatch(incrementByAmount(5)) }>
    Increase Count By 5</button>
    // <div>
    //   {/* <Register/>  */}
    //   {/* <UserList/> */}
    //   {/* <RegisteruseMemo/> */}
    // </div>
  
}

export default Contact;
