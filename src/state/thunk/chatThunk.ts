import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';

import { APIChat } from 'api';
import { EventChat } from 'enum';
import { setInitialized, setMessageChat, statusChatChange } from 'state';
import {
  ChatMessageType,
  ChatStatusType,
  MessagesReceivedSubscribersType,
  Nullable,
  StatusChangedSubscribersType,
} from 'types';

let newMassage: Nullable<MessagesReceivedSubscribersType> = null;
let newStatus: Nullable<StatusChangedSubscribersType> = null;

const newMassageHandle = (
  dispatch: Dispatch,
): Nullable<MessagesReceivedSubscribersType> => {
  if (newMassage === null) {
    newMassage = (messages: ChatMessageType[]) => {
      dispatch(setMessageChat(messages));
    };
  }
  return newMassage;
};

const newStatusHandle = (dispatch: Dispatch): Nullable<StatusChangedSubscribersType> => {
  if (newStatus === null) {
    newStatus = (status: ChatStatusType) => {
      dispatch(statusChatChange(status));
    };
  }
  return newStatus;
};

export const startMessageListening = createAsyncThunk(
  'chatSlice/startMessageListening',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      APIChat.start();
      APIChat.subscribeMessage(EventChat.MessageReceived, newMassageHandle(dispatch));
      APIChat.subscribeStatus(EventChat.StatusChanged, newStatusHandle(dispatch));
    } catch (err) {
      return rejectWithValue('Error network connect...');
    } finally {
      dispatch(setInitialized(false));
    }
  },
);

export const stopMessageListening = createAsyncThunk(
  'chatSlice/stopMessageListening',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    try {
      APIChat.unsubscribeMessage(EventChat.MessageReceived, newMassageHandle(dispatch));
      APIChat.unsubscribeStatus(EventChat.StatusChanged, newStatusHandle(dispatch));
      APIChat.stop();
    } catch (err) {
      return rejectWithValue('Error network connect...');
    } finally {
      dispatch(setInitialized(false));
    }
  },
);

export const sendMessageChat = createAsyncThunk(
  'chatSlice/sendMessageChat',
  // eslint-disable-next-line consistent-return
  async (message: string, { rejectWithValue, dispatch }) => {
    try {
      APIChat.sendMessage(message);
    } catch (err) {
      return rejectWithValue('Error network connect...');
    } finally {
      dispatch(setInitialized(false));
    }
  },
);
