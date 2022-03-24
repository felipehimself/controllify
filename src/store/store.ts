import { configureStore } from '@reduxjs/toolkit';
import dataSlice from '../features/dataSlice';
import buttonsSlice from '../features/buttonsSlice';
import errorSlice from '../features/errorSlice';
import confirmSlice from '../features/confirmSlice';

const store = configureStore({
  reducer: {
    dados: dataSlice,
    buttonState: buttonsSlice,
    errorState: errorSlice,
    confirmState: confirmSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
