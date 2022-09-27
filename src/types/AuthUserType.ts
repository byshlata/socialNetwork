import { Nullable } from './Nullable';

import { AuthUserResponseType } from 'types/AuthUserResponseType';

export type AuthUserType = AuthUserResponseType & {
  captcha: Nullable<string>;
};
