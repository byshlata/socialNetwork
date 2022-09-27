import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChatMessageType, ChatStatusType, ChatType } from '../../types';

export const initialState: ChatType = {
  messages: [],
  isOpenChat: false,
  statusChat: 'pending',
};

export const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setMessageChat: (state, action: PayloadAction<ChatMessageType[]>) => {
      state.messages = [...state.messages, ...action.payload];
    },
    isOpenChat: (state, action: PayloadAction<boolean>) => {
      state.isOpenChat = action.payload;
    },
    statusChatChange: (state, action: PayloadAction<ChatStatusType>) => {
      state.statusChat = action.payload;
    },
  },
});

export const { setMessageChat, isOpenChat, statusChatChange } = chatSlice.actions;
