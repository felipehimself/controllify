import { createSlice } from '@reduxjs/toolkit';

const buttonsSlice = createSlice({
  name: 'buttos',
  initialState: {isDisable: true},
  reducers: {
    changeState: (state, action) => {
      state.isDisable = action.payload;
    },
  },
});

export const { changeState } = buttonsSlice.actions;

export default buttonsSlice.reducer;
