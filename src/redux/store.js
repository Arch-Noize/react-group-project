import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragons/dragonSlice';
import missionReducer from './mission/missionSlice';
import rocketReducer from './rockets/rocketSlice';

export default configureStore({
  reducer: {
    dragons: dragonReducer,
    missions: missionReducer,
    rockets: rocketReducer,
  },
});
