import { createSlice } from '@reduxjs/toolkit';

import { fetchEventByIdAction, fetchEventsAction } from './event.action';
import { EventModel } from '@it-meetup/dto';

interface CounterState {
  events: EventModel[];
  event: EventModel | null;
  loading: boolean;
  fetched: boolean;
}

const initialState: CounterState = {
  events: [],
  event: null,
  loading: false,
  fetched: true,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventByIdAction.pending, (state) => {
        state.loading = true;
        state.fetched = false;
      })
      .addCase(fetchEventByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        state.fetched = true;
        state.event = action.payload;
      })
      .addCase(fetchEventByIdAction.rejected, (state) => {
        state.loading = false;
        state.fetched = false;
        state.event = null;
      })
      .addCase(fetchEventsAction.pending, (state) => {
        state.loading = true;
        state.fetched = false;
      })
      .addCase(fetchEventsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.fetched = true;
        state.events = action.payload;
      })
      .addCase(fetchEventsAction.rejected, (state) => {
        state.loading = false;
        state.fetched = false;
        state.events = [];
      });
  },
});

export default eventSlice.reducer;
