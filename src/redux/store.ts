import { configureStore } from '@reduxjs/toolkit';
import table from './table';

const store = configureStore({
  reducer: { table },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
