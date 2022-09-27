import { PhotoType, UserProfileChangeType } from 'types';

export type UserProfileResponseType = UserProfileChangeType & {
  photos: PhotoType;
};
