import { AppRootStore } from 'state/store';
import { Nullable, UserProfileType } from 'types';

export const selectUserProfile = (state: AppRootStore): UserProfileType =>
  state.userProfile;

export const selectIsSearchJob = (state: AppRootStore): boolean =>
  state.userProfile.lookingForAJob;

export const selectSearchJobDescription = (state: AppRootStore): Nullable<string> =>
  state.userProfile.lookingForAJobDescription;

export const selectIsFollowerUser = (state: AppRootStore): boolean =>
  state.userProfile.isFollowerUser;
