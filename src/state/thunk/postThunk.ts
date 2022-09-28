import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_POST } from 'api';
import { addPost, isSpinAppLoading } from 'state';

export const getPostThunk = createAsyncThunk(
  'postSlice/getPhraseThunk',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const res = await API_POST.getAllPost();
      if (res) {
        const data = res.map(response => response.data);
        dispatch(addPost(data));
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);
