import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: true,
};

export const getDragons = createAsyncThunk('dragons/getDragons', async () => {
  const res = await axios.get('https://api.spacexdata.com/v4/dragons');
  const { data } = res;
  return data.map((dragon) => ({
    name: dragon.name,
    desc: dragon.description,
    id: dragon.id,
    img: dragon.flickr_images[1],
    reserved: dragon.reserved,
  }));
});

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const dragonID = action.payload;
      console.log(dragonID);
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id === dragonID) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
    },
    cancelReservation: (state, action) => {
      const dragonID = action.payload;
      console.log(dragonID);
      state.dragons = state.dragons.map((dragon) => {
        if (dragon.id === dragonID) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
    },
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

export const { addReservation, cancelReservation } = dragonSlice.actions;

export default dragonSlice.reducer;
