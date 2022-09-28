import React, {
  memo,
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { InputSearch, PaginationContainer, UserBlock } from 'components';
import s from 'components/usersWrapper/UsersWrapper.module.sass';
import { PaginationOption } from 'enum';
import { deleteUsers, selectIsLoading, selectItems, selectTotalCount } from 'state';
import { Nullable, UsersType } from 'types';

import 'antd/dist/antd.css';

export const UsersWrapper = memo(
  ({ callbackSearchUsers, callbackGetUsers, typeUser }: UsersType): ReactElement => {
    const dispatch = useDispatch();

    const users = useSelector(selectItems);
    const usersCount = useSelector(selectTotalCount);
    const isAppLoading = useSelector(selectIsLoading);

    const [searchValue, setSearchValue] = useState<string>('');

    let paginationElement: Nullable<ReactElement> = null;

    const onChangePage = useCallback(
      (page: number): void => {
        if (searchValue) {
          callbackSearchUsers(page, searchValue);
        } else {
          callbackGetUsers(page);
        }
      },
      [searchValue],
    );

    useEffect(() => {
      if (searchValue) {
        callbackSearchUsers(PaginationOption.StartCurrentPage, searchValue);
      } else {
        callbackGetUsers(PaginationOption.StartCurrentPage);
      }
      return () => {
        dispatch(deleteUsers());
      };
    }, [searchValue]);

    const onFindUser = (value: string): void => {
      setSearchValue(value);
    };

    if (usersCount > PaginationOption.PageSize) {
      paginationElement = (
        <PaginationContainer
          onChangePage={onChangePage}
          totalCount={usersCount}
          disabled={isAppLoading}
        />
      );
    }

    return (
      <div className={s.user}>
        <div className={s.userPageWrapper}>
          <InputSearch setDebouncedValue={onFindUser} />
        </div>
        <div className={s.paginationWrapper}>{paginationElement}</div>
        <Suspense fallback={<Spin size="large" />}>
          {users.map(m => (
            <UserBlock key={m.id} userShortInformation={m} typeUser={typeUser} />
          ))}
        </Suspense>
      </div>
    );
  },
);
