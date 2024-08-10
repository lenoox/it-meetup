import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './event/event.reduer';
import authSlice from './auth/auth.reduer';

export const store = configureStore({
  reducer: {
    event: eventSlice,
    user: authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
