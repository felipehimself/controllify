import { createSlice } from '@reduxjs/toolkit';

import { IUserData } from './../interfaces/interfaces';
import mock from '../mock';

const initialState: IUserData[] = mock;

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { dados: initialState },
  reducers: {
    getData: (state) => {},
  },
});

export default dataSlice.reducer