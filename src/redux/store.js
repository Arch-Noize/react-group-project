import { configureStore } from '@reduxjs/toolkit';
import rocketReducers from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducers,
  },
});

export default store;
