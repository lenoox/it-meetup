import { EventModel, EventResponse } from '@it-meetup/dto';

export const mapEventToEventDto = (input: EventModel): EventResponse => {
  return {
    id: input._id,
    title: input.title,
    organisation: input.organisation,
    description: input.description,
    category: input.category,
    date: input.date,
    user: input.user,
    createdAt: input.createdAt,
    updatedAt: input.updatedAt,
  };
};
