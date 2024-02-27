import { configureStore } from '@reduxjs/toolkit';
import appReducres from './slice/app';

export const store = configureStore({
  reducer: {
    app: appReducres,
  },
});
