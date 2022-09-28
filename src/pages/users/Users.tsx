import React, { ReactElement } from 'react';

import { UsersWrapper } from 'components';
import { PaginationOption, TypeUser } from 'enum';
import { useAppDispatch } from 'hooks';
import { getUsers, searchUsers } from 'state';

export const Users = (): ReactElement => {
  const dispatch = useAppDispatch();

  const onSearchUsers = (currentPage: number, term: string): void => {
    dispatch(
      searchUsers({
        currentPage,
        pageSize: PaginationOption.PageSize,
        term,
        typeUser: TypeUser.AnyUser,
      }),
    );
  };

  const onGetUsers = (currentPage: number): void => {
    dispatch(
      getUsers({
        currentPage,
        pageSize: PaginationOption.PageSize,
        typeUser: TypeUser.AnyUser,
      }),
    );
  };
  return (
    <UsersWrapper
      callbackSearchUsers={onSearchUsers}
      callbackGetUsers={onGetUsers}
      typeUser={TypeUser.AnyUser}
    />
  );
};
