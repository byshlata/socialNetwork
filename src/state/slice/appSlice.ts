import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppInitialStateType, Nullable } from '../../types';

export const initialState: AppInitialStateType = {
  isAppLoading: false,
  errorMessage: null,
  isLocalLoading: false,
  isInitialized: true,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    isSpinAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<Nullable<string>>) => {
      state.errorMessage = action.payload;
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },

    isLocalLoading: (state, action: PayloadAction<boolean>) => {
      state.isLocalLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.errorMessage = action.payload as string;
      },
    );
  },
});

export const { isSpinAppLoading, setErrorMessage, isLocalLoading, setInitialized } =
  appSlice.actions;
