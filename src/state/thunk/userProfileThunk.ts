import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'api';
import { setUserProfile, isSpinAppLoading } from 'state';
import { UserProfileType } from 'types';

export const getUserProfile = createAsyncThunk(
  'userProfileSlice/getUserProfile',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const userProfileInformation = await API.getUserProfile(userId);
      const status = await API.getUserStatus(userId);
      const isFollowerUser = await API.getFollowerUser(userId);
      const res: UserProfileType = { status, isFollowerUser, ...userProfileInformation };

      dispatch(setUserProfile(res));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);
