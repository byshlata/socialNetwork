import { Nullable } from './Nullable';
import { PhotoType } from './PhotoType';

export type UserShortType = {
  name: string;
  id: number;
  uniqueUrlName: Nullable<string>;
  photos: PhotoType;
  status: Nullable<string>;
  followed: boolean;
};
