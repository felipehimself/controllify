import { createSlice } from '@reduxjs/toolkit';
import { IConfirm } from '../interfaces/interfaces';

const initialState: IConfirm = {
  value: false,
  msg: '',
  id: ''
};

const confirmSlice = createSlice({
  name: 'confirm',
  initialState: initialState,
  reducers: {
    fireConfirm: (state, action) => {
      state.value = action.payload.value;
      state.msg = action.payload.msg;
      state.id = action.payload.id
    },
  },
});

export const {fireConfirm} = confirmSlice.actions

export default confirmSlice.reducer
