import { useEffect } from 'react';
import { EventFacade } from '../../store/event/event.facade';

export function Home() {
  const { events, fetchEvents } = EventFacade();
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div>
      {events?.map((event) => (
        <li key={event._id}>{event.title}</li>
      ))}
    </div>
  );
}

export default Home;
