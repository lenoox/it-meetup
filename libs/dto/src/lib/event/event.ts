export interface EventModel {
  _id: string;
  title: string;
  organisation: string;
  description: string;
  date: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}
export interface EventByDate {
  date: string;
  values: EventDto[];
}

export interface EventsDto {
  _id: number;
  date: string;
  data: EventDto[];
}

export interface EventDto {
  _id: string;
  title: string;
  organisation: string;
  description: string;
  category: string;
  date: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
