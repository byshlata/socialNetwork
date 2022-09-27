import { UsersRequestType } from 'types/UsersRequestType';

export type UsersSearchRequestType = UsersRequestType & {
  term: string;
};
