import { EventFacade } from '../../store/event/event.facade';
import { ListWithPagination } from '@it-meetup/ui';

export function Home() {
  const { events, fetchEvents } = EventFacade();
  // useEffect(() => {
  //   fetchEvents();
  // }, []);
  return (
    <div>
      <ListWithPagination />
    </div>
  );
}

export default Home;
