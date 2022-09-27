import { Nullable } from './Nullable';

export type AppInitialStateType = {
  isAppLoading: boolean;
  isLocalLoading: boolean;
  errorMessage: Nullable<string>;
  isInitialized: boolean;
};
