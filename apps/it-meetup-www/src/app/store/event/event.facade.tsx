import { fetchEventByIdAction, fetchEventsAction } from './event.action';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const EventFacade = () => {
  const events = useSelector((state: RootState) => state.event.events);
  const dispatch: AppDispatch = useDispatch();
  const fetchEventById = (eventId: string): void => {
    dispatch(fetchEventByIdAction(eventId));
  };
  const fetchEvents = (): void => {
    dispatch(fetchEventsAction());
  };
  return {
    fetchEvents,
    fetchEventById,
    events,
  };
};
