import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserProfileType } from '../../types';

import { followUserSlice } from './followerUserSlice';

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

export const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileType>) => action.payload,
    deleteProfileUser: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(
      followUserSlice.actions.followUser,
      (state, action: PayloadAction<number>) => {
        if (state.userId === action.payload) {
          state.isFollowerUser = true;
        }
      },
    );
    builder.addCase(
      followUserSlice.actions.unfollowUser,
      (state, action: PayloadAction<number>) => {
        if (state.userId === action.payload) {
          state.isFollowerUser = false;
        }
      },
    );
  },
});

export const { setUserProfile, deleteProfileUser } = userProfileSlice.actions;
