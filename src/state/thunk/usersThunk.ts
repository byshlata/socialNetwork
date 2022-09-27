import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { setUsers } from '../slice/usersSlice';

import { API } from 'api';
import { TypeUser } from 'enum';
import { isSpinAppLoading } from 'state/slice/appSlice';
import { UsersRequestType, UsersSearchRequestType } from 'types';

export const getUsers = createAsyncThunk(
  'usersSlice/getUsers',
  // eslint-disable-next-line consistent-return
  async (
    { currentPage, pageSize, typeUser }: UsersRequestType,
    { rejectWithValue, dispatch },
  ): // eslint-disable-next-line consistent-return
  Promise<any> => {
    try {
      dispatch(isSpinAppLoading(true));
      let response;
      if (typeUser === TypeUser.AnyUser) {
        response = await API.getUsers(currentPage, pageSize);
      } else {
        response = await API.getFriends(currentPage, pageSize);
      }

      if (response.error !== null) {
        return rejectWithValue(response.error);
      }
      dispatch(setUsers(response));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);

export const searchUsers = createAsyncThunk(
  'usersSlice/searchUsers',
  // eslint-disable-next-line consistent-return
  async (
    { currentPage, pageSize, term, typeUser }: UsersSearchRequestType,
    { rejectWithValue, dispatch },
  ): // eslint-disable-next-line consistent-return
  Promise<any> => {
    try {
      dispatch(isSpinAppLoading(true));
      let response;
      if (typeUser === TypeUser.AnyUser) {
        response = await API.searchUsersByName(currentPage, pageSize, term);
      } else {
        response = await API.searchFriendsByName(currentPage, pageSize, term);
      }

      if (response.error !== null) {
        return rejectWithValue(response.error);
      }
      dispatch(setUsers(response));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);
