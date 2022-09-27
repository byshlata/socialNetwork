import React, { ReactElement } from 'react';

import { Button } from 'antd';

import { buttonGropeFollowUnfollowType } from './type';

export const ButtonFollow = ({
  followCallback,
  unfollowCallback,
  isFollowerUser,
}: buttonGropeFollowUnfollowType): ReactElement => {
  const onClickFollowUser = (): void => {
    followCallback();
  };

  const onClickUnfollowUser = (): void => {
    unfollowCallback();
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isFollowerUser ? (
        <Button onClick={onClickUnfollowUser} type="default">
          unfollowed
        </Button>
      ) : (
        <Button onClick={onClickFollowUser} type="primary">
          followed
        </Button>
      )}
    </>
  );
};
