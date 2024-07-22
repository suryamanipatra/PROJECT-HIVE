import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from '../redux/user/userSlice';

export const store = configureStore({
  reducer: {
    user:useReducer,
  },
})