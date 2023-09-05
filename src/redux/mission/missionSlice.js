import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    console.log(data);
    return data.map((mission) => ({
      name: mission.mission_name,
      description: mission.description,
      id: mission.mission_id,
    }));
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
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
  },
});

export default missionSlice.reducer;
