import { ComponentsUserTypes } from 'types/ContactsUserType';
import { Nullable } from 'types/Nullable';

export type UserProfileChangeType = {
  aboutMe: Nullable<string>;
  contacts: ComponentsUserTypes;
  lookingForAJob: boolean;
  lookingForAJobDescription: Nullable<string>;
  fullName: Nullable<string>;
  userId: number;
};
