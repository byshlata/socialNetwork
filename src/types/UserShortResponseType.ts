import { Nullable, UserShortType } from 'types';

export type UserShortResponseType = {
  items: UserShortType[];
  totalCount: number;
  error: Nullable<string>;
};
