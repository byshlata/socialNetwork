import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FollowUserType } from '../../types/FollowUserType';

export const initialState: FollowUserType = {
  isFollowerUser: false,
  userId: 1,
};

export const followUserSlice = createSlice({
  name: 'followUserSlice',
  initialState,
  reducers: {
    setFollowUser: (state, action: PayloadAction<boolean>): void => {
      state.isFollowerUser = action.payload;
    },
    followUser: (state, action: PayloadAction<number>): void => {
      state.isFollowerUser = true;
      state.userId = action.payload;
    },
    unfollowUser: (state, action: PayloadAction<number>): void => {
      state.isFollowerUser = false;
      state.userId = action.payload;
    },
  },
});

export const { setFollowUser, followUser, unfollowUser } = followUserSlice.actions;
