import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, logout, initialState } from '../slices/login.slice';

const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state) => {
      state.isAuthenticated = true;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
    });
});

export default loginReducer;
