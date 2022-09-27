import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'api';
import { ResultsCode } from 'enum';
import {
  changeAuthUserProfileInformation,
  isLocalLoading,
  isSpinAppLoading,
  setAuthUserProfileInformation,
  updatePhoto,
} from 'state';
import { UserProfileChangeType, UserProfileType } from 'types';

export const getAuthUserProfile = createAsyncThunk(
  'authUserProfileSlice/getAuthUserProfile',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const userProfileInformation = await API.getUserProfile(userId);
      const status = await API.getUserStatus(userId);
      const res: UserProfileType = {
        status,
        isFollowerUser: false,
        ...userProfileInformation,
      };

      dispatch(setAuthUserProfileInformation(res));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);

export const changeAuthUserProfile = createAsyncThunk(
  'authUserProfileSlice/changeAuthUserProfile',
  // eslint-disable-next-line consistent-return
  async (payload: UserProfileChangeType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const res = await API.changeProfile(payload);

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }

      dispatch(changeAuthUserProfileInformation(payload));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);

export const setPhoto = createAsyncThunk(
  'authUserProfileSlice/setPhoto',
  // eslint-disable-next-line consistent-return
  async (payload: File, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isLocalLoading(true));
      const res = await API.updatePhoto(payload);
      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }
      dispatch(updatePhoto(res.data.photos));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);
