import { EventDto, EventModel } from '@it-meetup/dto';

export const mapEventToEventDto = (input: EventModel): EventDto => {
  return {
    id: input._id,
    title: input.title,
    organisation: input.organisation,
    description: input.description,
    date: input.date,
    user: input.user,
    createdAt: input.createdAt,
    updatedAt: input.updatedAt,
  };
};
