import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_POST } from 'api';
import { addPost } from 'state';
import { setInitialized } from 'state/slice/appSlice';

export const getPostThunk = createAsyncThunk(
  'postSlice/getPhraseThunk',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true));
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
      dispatch(setInitialized(false));
    }
  },
);
