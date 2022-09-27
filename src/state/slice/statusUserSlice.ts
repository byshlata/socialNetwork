import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusUserType } from '../../types';

export const initialState: StatusUserType = {
  statusUser: '',
};

export const statusUserSlice = createSlice({
  name: 'statusUserSlice',
  initialState,
  reducers: {
    setStatusUser: (state, action: PayloadAction<string>): void => {
      state.statusUser = action.payload;
    },
    changeStatus: (state, action: PayloadAction<string>): void => {
      state.statusUser = action.payload;
    },
  },
});

export const { setStatusUser, changeStatus } = statusUserSlice.actions;
