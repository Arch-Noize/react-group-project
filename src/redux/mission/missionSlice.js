// missionSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data.map((mission) => ({
      name: mission.mission_name,
      description: mission.description,
      id: mission.mission_id,
      reserved: false,
    }));
  },
);

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  async (id) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const mission = data.find((mission) => mission.mission_id === id);
    mission.reserved = true;
    return mission;
  },
);

export const leaveMission = createAsyncThunk(
  'missions/leaveMission',
  async (id) => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    const mission = data.find((mission) => mission.mission_id === id);
    mission.reserved = false;
    return mission;
  },
);

const initialState = {
  missions: [],
  status: 'idle',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }))
      .addCase(joinMission.fulfilled, (state, action) => {
        const missionId = action.payload.mission_id;
        state.missions = state.missions.map((mission) => (mission.id === missionId
          ? { ...mission, reserved: true }
          : mission));
      })
      .addCase(leaveMission.fulfilled, (state, action) => {
        const missionId = action.payload.mission_id;
        state.missions = state.missions.map((mission) => (mission.id === missionId
          ? { ...mission, reserved: false }
          : mission));
      });
  },
});

export default missionSlice.reducer;
