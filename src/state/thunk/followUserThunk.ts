import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'api';
import { ResultsCode } from 'enum';
import { followUser, isLocalLoading, setFollowUser, unfollowUser } from 'state';

export const getFollowUserThunk = createAsyncThunk(
  'followUserSlice/getFollowUserThunk',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isLocalLoading(true));
      const res = await API.getFollowerUser(userId);

      dispatch(setFollowUser(res));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);

export const followUserThunk = createAsyncThunk(
  'followUserSlice/followUserThunk',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isLocalLoading(true));
      const res = await API.followUser(userId);

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }
      dispatch(followUser(userId));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);

export const unfollowUserThunk = createAsyncThunk(
  'followUserSlice/unFollowUserThunk',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isLocalLoading(true));
      const res = await API.unfollowUser(userId);

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }
      dispatch(unfollowUser(userId));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);
