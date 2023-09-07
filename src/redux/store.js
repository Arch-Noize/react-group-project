import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonSlice';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    missions: missionReducer,
  },
});

export default store;
