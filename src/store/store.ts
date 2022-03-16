import { configureStore } from '@reduxjs/toolkit';
import data from './../features/dataSlicer';

const store = configureStore({
  reducer: {
    dados: data,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
