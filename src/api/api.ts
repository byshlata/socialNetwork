import { API_CONFIG } from './config';

import { PathAPI } from 'enum';
import {
  AuthUserResponseType,
  LoginParamsType,
  Nullable,
  PhotoType,
  ResponseType,
  StatusRequestType,
  UserProfileChangeType,
  UserProfileResponseType,
  UserShortResponseType,
} from 'types';

export const API = {
  getUsers: async (currentPage: number, pageSize: number) => {
    const response = await API_CONFIG.get<UserShortResponseType>(
      `${PathAPI.Users}?${PathAPI.Page}=${currentPage}&${PathAPI.Count}=${pageSize}`,
    );
    return response.data;
  },

  getFriends: async (currentPage: number, pageSize: number) => {
    const response = await API_CONFIG.get<UserShortResponseType>(
      `${PathAPI.Users}?${PathAPI.Page}=${currentPage}&${PathAPI.Count}=${pageSize}&${
        PathAPI.Friend
      }=${true}`,
    );
    return response.data;
  },

  searchUsersByName: async (currentPage: number, pageSize: number, term: string) => {
    const response = await API_CONFIG.get<UserShortResponseType>(
      `${PathAPI.Users}?${PathAPI.Page}=${currentPage}&${PathAPI.Count}=${pageSize}&${PathAPI.Term}=${term}`,
    );
    return response.data;
  },

  searchFriendsByName: async (currentPage: number, pageSize: number, term: string) => {
    const response = await API_CONFIG.get<UserShortResponseType>(
      `${PathAPI.Users}?${PathAPI.Page}=${currentPage}&${PathAPI.Count}=${pageSize}&${
        PathAPI.Term
      }=${term}&${PathAPI.Friend}=${true}`,
    );
    return response.data;
  },

  getUserProfile: async (userId: number) => {
    const response = await API_CONFIG.get<UserProfileResponseType>(
      `${PathAPI.Profile}${PathAPI.Root}${userId}`,
    );
    return response.data;
  },

  changeProfile: async (payload: UserProfileChangeType) => {
    const response = await API_CONFIG.put<ResponseType<{}>>(
      `${PathAPI.Profile}`,
      payload,
    );
    return response.data;
  },

  getUserStatus: async (userId: number) => {
    const response = await API_CONFIG.get<string>(
      `${PathAPI.Profile}${PathAPI.Status}${PathAPI.Root}${userId}`,
    );
    return response.data;
  },

  changeStatus: async ({ status }: StatusRequestType) => {
    const response = await API_CONFIG.put<ResponseType<{}>>(
      `${PathAPI.Profile}${PathAPI.Status}`,
      { status },
    );
    return response.data;
  },

  getAuthUser: async () => {
    const response = await API_CONFIG.get<ResponseType<AuthUserResponseType>>(
      `${PathAPI.Auth}${PathAPI.Me}`,
    );
    return response.data;
  },

  authUser: async ({ password, email, rememberMe, captcha }: LoginParamsType) => {
    const response = await API_CONFIG.post<ResponseType<{ userId: Nullable<number> }>>(
      `${PathAPI.Auth}${PathAPI.Login}`,
      { password, email, rememberMe, captcha },
    );
    return response.data;
  },

  getCaptchaUrl: async () => {
    const response = await API_CONFIG.get<{ url: string }>(
      `${PathAPI.Security}${PathAPI.Captcha}`,
    );
    return response.data;
  },

  outUser: async () => {
    const response = await API_CONFIG.delete<ResponseType<{}>>(
      `${PathAPI.Auth}${PathAPI.Login}`,
    );
    return response.data;
  },

  getFollowerUser: async (userId: number) => {
    const response = await API_CONFIG.get<boolean>(
      `${PathAPI.Follow}${PathAPI.Root}${userId}`,
    );
    return response.data;
  },

  followUser: async (userId: number) => {
    const response = await API_CONFIG.post<ResponseType<{}>>(
      `${PathAPI.Follow}${PathAPI.Root}${userId}`,
    );
    return response.data;
  },

  unfollowUser: async (userId: number) => {
    const response = await API_CONFIG.delete<ResponseType<{}>>(
      `${PathAPI.Follow}${PathAPI.Root}${userId}`,
    );
    return response.data;
  },

  updatePhoto: async (file: any) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await API_CONFIG.put<ResponseType<{ photos: PhotoType }>>(
      `${PathAPI.Profile}${PathAPI.Root}${PathAPI.Photo}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data;
  },
};
