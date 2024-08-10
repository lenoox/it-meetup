export interface EventModel {
  _id: string;
  title: string;
  organisation: string;
  description: string;
  date: Date;
  category: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: unknown;
}
export interface EventByDate {
  date: string;
  values: EventResponse[];
}

export interface EventsResponse {
  date: string;
  data: EventResponse[];
  rowIndex?: number;
}

export interface EventResponse {
  id: string;
  title: string;
  organisation: string;
  description: string;
  category: string;
  date: Date;
  user: string;
  createdAt: string;
  updatedAt: string;
}
