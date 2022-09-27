import React, { ReactElement } from 'react';

import { Skeleton } from 'antd';
import { useSelector } from 'react-redux';

import s from './UserBlock.module.sass';

import { AvatarUser, ButtonFollow } from 'components';
import { TypeUser } from 'enum/typeUser';
import { useAppDispatch } from 'hooks';
import {
  followUserThunk,
  selectIsLoading,
  selectIsLocalLoading,
  unfollowUserThunk,
} from 'state';
import { UserShortType } from 'types';

type UserBlockType = {
  userShortInformation: UserShortType;
  typeUser: TypeUser;
};

export const UserBlock = ({
  userShortInformation,
  typeUser,
}: UserBlockType): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoadingButtonBlock = useSelector(selectIsLocalLoading);
  const isAppLoading = useSelector(selectIsLoading);

  const onFollowUser = (): void => {
    dispatch(followUserThunk(userShortInformation.id));
  };

  const onUnfollowUser = (): void => {
    dispatch(unfollowUserThunk(userShortInformation.id));
  };

  const isLoadingBlock = isAppLoading && !isLoadingButtonBlock;

  const isButtonFollow = typeUser === TypeUser.AnyUser;

  return (
    <div key={userShortInformation.id} className={s.userWrapper}>
      {isLoadingBlock ? (
        <Skeleton
          avatar
          paragraph={{
            rows: 1,
          }}
        />
      ) : (
        <>
          <div className={s.userItem}>
            <AvatarUser userInformation={userShortInformation} typeURL="profile" shadow />
          </div>
          <div className={s.buttonFollowing}>
            {isButtonFollow && (
              <ButtonFollow
                followCallback={onFollowUser}
                unfollowCallback={onUnfollowUser}
                isFollowerUser={userShortInformation.followed}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
