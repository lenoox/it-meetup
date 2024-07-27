import { EventByDate, EventDto } from '@it-meetup/dto';
import { DateTime } from 'luxon';

export const eventsGroupByDate = (events: EventDto[]): EventByDate[] => {
  const groupedByDate = events.reduce((acc, item: EventDto) => {
    const eventDate = DateTime.fromJSDate(item.date, { zone: 'utc' });
    const formattedDate = eventDate.toFormat('yyyy LL');

    if (!acc[formattedDate]) {
      acc[formattedDate] = [];
    }
    acc[formattedDate].push(item);

    return acc;
  }, {} as { [key: string]: EventDto[] });

  const eventsList: EventByDate[] = Object.keys(groupedByDate).map((date) => ({
    date,
    values: groupedByDate[date],
  }));
  return eventsList;
};
