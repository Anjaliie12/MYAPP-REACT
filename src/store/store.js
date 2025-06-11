import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducer";



const store = configureStore({
    reducer: rootReducer,
  });//Creating A store 

  export default store;
  