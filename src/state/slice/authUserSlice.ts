import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthUserType, Nullable, AuthUserResponseType } from '../../types';

export const initialState: AuthUserType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};

export const authUserSlice = createSlice({
  name: 'authUserSlice',
  initialState,
  reducers: {
    setAuthUserInitiationData: (state, action: PayloadAction<AuthUserResponseType>) => {
      state.id = action.payload.id;
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.isAuth = action.payload.isAuth;
    },
    setAuthUserData: (state, action: PayloadAction<AuthUserType>) => action.payload,

    setCaptchaUrl: (state, action: PayloadAction<Nullable<string>>) => {
      state.captcha = action.payload;
    },

    deleteAuthUserInitiationData: () => initialState,
  },
});

export const {
  setAuthUserInitiationData,
  deleteAuthUserInitiationData,
  setCaptchaUrl,
  setAuthUserData,
} = authUserSlice.actions;
