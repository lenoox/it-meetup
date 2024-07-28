import { EventFacade } from '../../store/event/event.facade';
import { useEffect } from 'react';
import { ListWithPagination } from '@it-meetup/ui';

export function Home() {
  const { events, fetchEvents } = EventFacade();
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div>
      <ListWithPagination data={events} />
    </div>
  );
}

export default Home;
