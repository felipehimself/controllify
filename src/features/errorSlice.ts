import { createSlice } from '@reduxjs/toolkit';
import { IError } from '../interfaces/interfaces';

const initialState: IError = {
  value: false,
  msg: null,
};

const errorSlice = createSlice({
  name: 'errorSlice',
  initialState: initialState,
  reducers: {
    fireError: (state, action) => {
      state.value = action.payload.value;
      state.msg = action.payload.msg;
    },
  },
});

export const { fireError } = errorSlice.actions;

export default errorSlice.reducer;
