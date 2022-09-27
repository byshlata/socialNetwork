import { AppRootStore } from 'state/store';
import { AuthUserType, Nullable } from 'types';

export const selectAuthUserData = (state: AppRootStore): AuthUserType => state.auth;

export const selectAuthUserLogin = (state: AppRootStore): Nullable<string> =>
  state.auth.login;

export const selectAuthUserId = (state: AppRootStore): Nullable<number> => state.auth.id;

export const selectIsAuthUser = (state: AppRootStore): boolean => state.auth.isAuth;

export const selectCaptchaUrl = (state: AppRootStore): Nullable<string> =>
  state.auth.captcha;
