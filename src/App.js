// import About from "./screens/About";
import "./App.css";
// import Contact from "./screens/Contact";
import RegisteruseMemo from "./screens/RegisteruseMemo";
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router";
import UserList from "./screens/UserList";
import store from "./store/store";

const router = createBrowserRouter([
  { path: "/RegisteruseMemo",
 element: <RegisteruseMemo/>,
 },
 { path: "/UserList",
  element: <UserList/>,
  },
]);


function App() {
  return (
<div>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</div>


  // <div>
  //   <About />
   //<Contact/>
   //</div>
   );
};

export default App;


//Basic App create - Done
//Screen and Components Start

//App.js are in src
//import, screens/About

//means of ./ is current directory
//means of ../jb apne directory se pichhle directory mae jana hoa

//redux n context API