import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'api';
import { ResultsCode } from 'enum';
import { changeStatus, isLocalLoading } from 'state';
import { StatusRequestType } from 'types';

export const getStatusUserThunk = createAsyncThunk(
  'statusUserSlice/getStatusUserThunk',
  // eslint-disable-next-line consistent-return
  async (userId: number, { rejectWithValue, dispatch }) => {
    try {
      await API.getUserStatus(userId);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);

export const changeStatusThunk = createAsyncThunk(
  'statusUserSlice/changeStatusThunk',
  // eslint-disable-next-line consistent-return
  async ({ status }: StatusRequestType, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isLocalLoading(true));
      const res = await API.changeStatus({ status });

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }
      dispatch(changeStatus(status));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isLocalLoading(false));
    }
  },
);
