import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserShortResponseType } from '../../types';

import { followUserSlice } from './followerUserSlice';

export const initialState: UserShortResponseType = {
  items: [],
  error: null,
  totalCount: 0,
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserShortResponseType>) => action.payload,
    deleteUsers: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(
      followUserSlice.actions.followUser,
      (state, action: PayloadAction<number>) => {
        state.items.forEach(item => {
          if (item.id === action.payload) {
            // eslint-disable-next-line no-param-reassign
            item.followed = true;
          }
        });
      },
    );
    builder.addCase(
      followUserSlice.actions.unfollowUser,

      (state, action: PayloadAction<number>) => {
        state.items.forEach(item => {
          if (item.id === action.payload) {
            // eslint-disable-next-line no-param-reassign
            item.followed = false;
          }
        });
      },
    );
  },
});

export const { setUsers, deleteUsers } = usersSlice.actions;
