import { AppRootStore } from 'state/store';
import { Nullable, PostType, UserProfileResponseType, UserProfileType } from 'types';

export const selectAuthUserSettings = (state: AppRootStore): UserProfileType =>
  state.authUserProfile;

export const selectAuthUserProfileInformation = (
  state: AppRootStore,
): UserProfileResponseType => state.authUserProfile;

export const selectAuthUserName = (state: AppRootStore): Nullable<string> =>
  state.authUserProfile.fullName;

export const selectPosts = (state: AppRootStore): PostType[] => state.posts;

export const selectorStatusUser = (state: AppRootStore): string =>
  state.authUserProfile.status;
