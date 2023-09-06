import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rocketReducers from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});
