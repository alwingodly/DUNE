import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
    timers: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    themeChanger(state) {
      state.darkMode = !state.darkMode
    },
    toggleTimer(state){
      state.timers = !state.timers
    }
  }
});

export const { themeChanger , toggleTimer } = userSlice.actions;

export default userSlice.reducer;
