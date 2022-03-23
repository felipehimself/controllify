import { createSlice } from '@reduxjs/toolkit';

import { IUserData } from './../interfaces/interfaces';
import mock from '../mock';

const initialState: IUserData[] = mock;

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: { dados: initialState },
  reducers: {
    updateData: (state, action) => {
      const newData = state.dados.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.data;
        }
        return item;
      });

      state.dados = newData;
    },

    insertEmpresa: (state, action)=>{
      state.dados.push(action.payload)
    },

    removeEmpresa: (state, action)=>{
      state.dados.forEach((item, index)=>{
        if (item.id === action.payload.id) {
          state.dados.splice(index,1)
        }
      })
    }
  },
});

export const { updateData, insertEmpresa, removeEmpresa } = dataSlice.actions;

export default dataSlice.reducer;
