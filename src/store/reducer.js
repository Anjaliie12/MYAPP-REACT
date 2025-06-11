import { createAction, createReducer } from '@reduxjs/toolkit';


const incrementByAmount = createAction('counter/incrementByAmount');//Actions

const initialState = { value: 0 };//intial store

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    });
});
export {incrementByAmount};
//action payload 5
export default rootReducer;