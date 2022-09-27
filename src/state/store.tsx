import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slice/appSlice';
import { authUserProfileSlice } from './slice/authUserProfileSlice';
import { authUserSlice } from './slice/authUserSlice';
import { chatSlice } from './slice/chatSlice';
import { followUserSlice } from './slice/followerUserSlice';
import { postSlice } from './slice/postSlice';
import { statusUserSlice } from './slice/statusUserSlice';
import { userProfileSlice } from './slice/userProfileSlice';
import { usersSlice } from './slice/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    auth: authUserSlice.reducer,
    userProfile: userProfileSlice.reducer,
    users: usersSlice.reducer,
    app: appSlice.reducer,
    authUserProfile: authUserProfileSlice.reducer,
    followUser: followUserSlice.reducer,
    statusUserSlice: statusUserSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
