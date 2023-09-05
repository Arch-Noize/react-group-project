import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: true,
};

export const getDragons = createAsyncThunk('dragons/getDragons', async () => {
  const res = await axios.get('https://api.spacexdata.com/v4/dragons');
  return res.data;
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getDragons.pending]: (state) => {
      state.isLoading = true;
    },
    [getDragons.fulfilled]: (state, action) => {
      state.dragons = action.payload;
      state.isLoading = false;
    },
    [getDragons.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const { } = dragonSlice.actions;

export default dragonSlice.reducer;
