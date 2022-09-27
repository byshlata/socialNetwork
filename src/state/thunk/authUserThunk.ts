import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API } from 'api';
import { ResultsCode } from 'enum';
import {
  deleteAuthUserInitiationData,
  isSpinAppLoading,
  setAuthUserInitiationData,
  setCaptchaUrl,
  setInitialized,
} from 'state';
import { LoginParamsType } from 'types';

export const getAuthUser = createAsyncThunk(
  'authUserSlice/getAuthUser',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setInitialized(true));
      const res = await API.getAuthUser();

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }

      dispatch(
        setAuthUserInitiationData({
          id: res.data.id,
          login: res.data.login,
          email: res.data.email,
          isAuth: true,
        }),
      );
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(setInitialized(false));
    }
  },
);

export const getCaptchaUrl = createAsyncThunk(
  'authUserSlice/getCaptchaUrl',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const res = await API.getCaptchaUrl();
      dispatch(setCaptchaUrl(res.url));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);

export const authUser = createAsyncThunk(
  'authUserSlice/authUser',
  async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { captcha, rememberMe, email, password }: LoginParamsType,
    { rejectWithValue, dispatch },
  ): // eslint-disable-next-line consistent-return
  Promise<any> => {
    try {
      dispatch(isSpinAppLoading(true));
      const res = await API.authUser({ captcha, rememberMe, email, password });

      if (res.resultCode === ResultsCode.OkRequest) {
        const authDataUser = await API.getAuthUser();

        if (res.resultCode !== ResultsCode.OkRequest) {
          if (res.messages.length) {
            return rejectWithValue(res.messages[0]);
          }
        }

        dispatch(
          setAuthUserInitiationData({
            id: authDataUser.data.id,
            login: authDataUser.data.login,
            email: authDataUser.data.email,
            isAuth: true,
          }),
        );
      }

      if (res.resultCode === ResultsCode.Captcha) {
        dispatch(getCaptchaUrl());
      }
      if (res.messages.length) {
        return rejectWithValue(res.messages[0]);
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

export const outUser = createAsyncThunk(
  'authUserSlice/outUser',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(isSpinAppLoading(true));
      const res = await API.outUser();

      if (res.resultCode !== ResultsCode.OkRequest) {
        if (res.messages.length) {
          return rejectWithValue(res.messages[0]);
        }
      }
      dispatch(deleteAuthUserInitiationData());
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
    } finally {
      dispatch(isSpinAppLoading(false));
    }
  },
);
