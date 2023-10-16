import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: false,
    timers: false,
    currentUser: null,
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
    },
    userDetails(state , action){
      state.currentUser = action.payload.user;
    }
  }
});

export const { themeChanger , toggleTimer , userDetails } = userSlice.actions;

export default userSlice.reducer;
