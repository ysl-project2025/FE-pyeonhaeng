import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('user/loginSuccess');
export const logout = createAction('user/logout');

export interface LoginState {
  isAuthenticated: boolean;
}

export const initialState: LoginState = {
  isAuthenticated: false,
};
