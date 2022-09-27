import React, { ReactElement, Suspense, useEffect } from 'react';

import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import s from './ProfileUser.module.sass';

import { AvatarUserProfile, ProfileInformation, Spinner, ButtonFollow } from 'components';
import { useAppDispatch } from 'hooks';
import {
  deleteProfileUser,
  followUserThunk,
  getUserProfile,
  selectIsLoading,
  selectUserProfile,
  unfollowUserThunk,
  selectIsFollowerUser,
  selectAuthUserId,
} from 'state';

export const ProfileUser = (): ReactElement => {
  const dispatch = useAppDispatch();

  const {
    aboutMe,
    status,
    photos,
    fullName,
    contacts,
    lookingForAJobDescription,
    lookingForAJob,
  } = useSelector(selectUserProfile);
  const isAppLoading = useSelector(selectIsLoading);
  const isFollower = useSelector(selectIsFollowerUser);
  const userAuthId = useSelector(selectAuthUserId);

  const param = useParams<'id'>();
  let userId = param.id;
  let isVisibleButtonFollow = true;

  const isPhotoAvatar = photos.large === null;

  if (!userId) {
    if (userAuthId) {
      userId = userAuthId.toString();
      isVisibleButtonFollow = false;
    }
  }

  useEffect(() => {
    if (userId) {
      dispatch(getUserProfile(+userId));
    }
    return () => {
      dispatch(deleteProfileUser());
    };
  }, [userId]);

  const onFollowUser = (): void => {
    if (userId) {
      dispatch(followUserThunk(+userId));
    }
  };

  const onUnfollowUser = (): void => {
    if (userId) {
      dispatch(unfollowUserThunk(+userId));
    }
  };

  const profile: ReactElement = isAppLoading ? (
    <Spinner isLoading={isAppLoading && isPhotoAvatar} />
  ) : (
    <>
      <AvatarUserProfile status={status} fullName={fullName} photosLarge={photos.large} />
      <div className={s.informationWrapper}>
        <div className={s.buttonWrapper}>
          {isVisibleButtonFollow && (
            <ButtonFollow
              isFollowerUser={isFollower}
              followCallback={onFollowUser}
              unfollowCallback={onUnfollowUser}
            />
          )}
        </div>

        <ProfileInformation
          aboutMe={aboutMe}
          contacts={contacts}
          lookingForAJob={lookingForAJob}
          lookingForAJobDescription={lookingForAJobDescription}
        />
      </div>
    </>
  );

  return (
    <Suspense fallback={<Spin size="large" />}>
      <section className={s.profileContainer}>{profile}</section>
    </Suspense>
  );
};
