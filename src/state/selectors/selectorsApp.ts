import { AppRootStore } from '../store';

import { Nullable } from 'types';

export const selectIsInitialized = (state: AppRootStore): boolean =>
  state.app.isInitialized;

export const selectIsLoading = (state: AppRootStore): boolean => state.app.isAppLoading;

export const selectIsLocalLoading = (state: AppRootStore): boolean =>
  state.app.isLocalLoading;

export const selectErrorMessage = (state: AppRootStore): Nullable<string> =>
  state.app.errorMessage;
