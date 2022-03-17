import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './../features/dataSlicer';
import buttonsSlice from '../features/buttonsSlice';
const store = configureStore({
  reducer: {
    dados: dataSlice,
    buttonState: buttonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
