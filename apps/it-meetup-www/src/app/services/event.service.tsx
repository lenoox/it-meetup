import { apiService } from './api.service';
import { EventModel } from '@it-meetup/dto';

const path = 'event/';
export const fetchEventById = async (id: string): Promise<EventModel> => {
  const response = await apiService.get<EventModel>(`${path}/${id}`);
  return response.data;
};
export const fetchEvents = async (): Promise<EventModel[]> => {
  const response = await apiService.get<EventModel[]>(`${path}`);
  return response.data;
};
export const eventApi = {
  fetchEventById,
  fetchEvents,
};
