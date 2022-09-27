import { AppRootStore } from 'state/store';
import { UserShortType } from 'types';

export const selectItems = (state: AppRootStore): UserShortType[] => state.users.items;

export const selectTotalCount = (state: AppRootStore): number => state.users.totalCount;
