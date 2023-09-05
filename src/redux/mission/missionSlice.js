import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    console.log(data);
    return data;
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
  extraReducers: {},
});

export default missionSlice.reducer;
