import React, { ReactElement } from 'react';

import { UsersWrapper } from 'components';
import { PaginationOption, TypeUser } from 'enum';
import { useAppDispatch } from 'hooks';
import { searchUsers, getUsers } from 'state';

export const Friends = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onSearchFriends = (currentPage: number, term: string): void => {
    dispatch(
      searchUsers({
        currentPage,
        pageSize: PaginationOption.PageSize,
        term,
        typeUser: TypeUser.Friend,
      }),
    );
  };

  const onGetFriends = (currentPage: number): void => {
    dispatch(
      getUsers({
        currentPage,
        pageSize: PaginationOption.PageSize,
        typeUser: TypeUser.Friend,
      }),
    );
  };
  return (
    <UsersWrapper
      callbackSearchUsers={onSearchFriends}
      callbackGetUsers={onGetFriends}
      typeUser={TypeUser.Friend}
    />
  );
};
