import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './event/event.reduer';

export const store = configureStore({
  reducer: {
    event: eventSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
