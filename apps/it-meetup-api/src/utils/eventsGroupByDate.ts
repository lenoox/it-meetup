import { EventResponse, EventsResponse } from '@it-meetup/dto';
import { DateTime } from 'luxon';

export const eventsGroupByDate = (
  events: EventResponse[]
): EventsResponse[] => {
  const groupedByDate = events.reduce(
    (acc: { [key: string]: EventResponse[] }, item: EventResponse) => {
      const eventDate = DateTime.fromJSDate(item.date, { zone: 'utc' });
      const formattedDate = eventDate.toFormat('yyyy LL');

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(item);

      return acc;
    },
    {}
  );

  return Object.keys(groupedByDate).map(
    (date: string): EventsResponse => ({
      date,
      data: groupedByDate[date],
    })
  );
};
