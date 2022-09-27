import { UserProfileResponseType } from 'types/index';

export type UserProfileType = UserProfileResponseType & {
  status: string;
  isFollowerUser: boolean;
};
