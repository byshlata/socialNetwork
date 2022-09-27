import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhotoType, UserProfileChangeType, UserProfileType } from '../../types';

export const initialState: UserProfileType = {
  userId: 0,
  aboutMe: null,
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null,
  },
  lookingForAJob: false,
  lookingForAJobDescription: null,
  fullName: null,
  photos: {
    small: null,
    large: null,
  },
  status: '',
  isFollowerUser: false,
};

export const authUserProfileSlice = createSlice({
  name: 'authUserProfileSlice',
  initialState,
  reducers: {
    setAuthUserProfileInformation: (state, action: PayloadAction<UserProfileType>) =>
      action.payload,
    changeAuthUserProfileInformation: (
      state,
      action: PayloadAction<UserProfileChangeType>,
    ) => {
      state.aboutMe = action.payload.aboutMe;
      state.fullName = action.payload.fullName;
      state.lookingForAJob = action.payload.lookingForAJob;
      state.lookingForAJobDescription = action.payload.lookingForAJobDescription;
      state.contacts = action.payload.contacts;
    },
    updatePhoto: (state, action: PayloadAction<PhotoType>) => {
      state.photos.large = action.payload.large;
      state.photos.small = action.payload.small;
    },

    deleteUserAuthUserProfileInformation: () => initialState,
  },
});

export const {
  setAuthUserProfileInformation,
  deleteUserAuthUserProfileInformation,
  changeAuthUserProfileInformation,
  updatePhoto,
} = authUserProfileSlice.actions;
