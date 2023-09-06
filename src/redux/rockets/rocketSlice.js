import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action Types
export const FETCH_ROCKETS_REQUEST = 'FETCH_ROCKETS_REQUEST';
export const FETCH_ROCKETS_SUCCESS = 'FETCH_ROCKETS_SUCCESS';
export const FETCH_ROCKETS_FAILURE = 'FETCH_ROCKETS_FAILURE';

// Action Creators
export const fetchRocketsRequest = () => ({
  type: FETCH_ROCKETS_REQUEST,
});

export const fetchRocketsSuccess = (rockets) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload: rockets,
});

export const fetchRocketsFailure = (error) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload: error,
});

// Thunk to fetch rocket data
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rockets = response.data;
  console.log(rockets);
  return rockets;
});

const initialState = {
  rockets: [],
  isLoading: true,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // add reservation
    // remove reservation
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.isLoading = false;
    },
    [fetchRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketSlice.reducer;
