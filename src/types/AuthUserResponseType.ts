import { Nullable } from './Nullable';

export type AuthUserResponseType = {
  id: Nullable<number>;
  login: Nullable<string>;
  email: Nullable<string>;
  isAuth: boolean;
};
