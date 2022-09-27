import { Nullable } from './Nullable';

import { AuthUserResponseType } from 'types/AuthUserResponseType';

export type LoginUserType = AuthUserResponseType & {
  isAuth: boolean;
  captcha: Nullable<string>;
};
