import { createAsyncThunk } from '@reduxjs/toolkit';
import { eventApi } from '../../services/event.service';

export const fetchEventByIdAction = createAsyncThunk(
  'event/fetchEventsById',
  async (eventId: string) => {
    const response = await eventApi.fetchEventById(eventId);
    return response;
  }
);
export const fetchEventsAction = createAsyncThunk(
  'event/fetchEvents',
  async () => {
    const response = await eventApi.fetchEvents();
    return response;
  }
);
