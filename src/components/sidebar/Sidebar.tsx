import React, { ReactElement, useEffect } from 'react';

import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AvatarPhoto, SpanChange } from 'components';
import s from 'components/sidebar/Sidebar.module.sass';
import { Path } from 'enum';
import { useAppDispatch } from 'hooks';
import {
  changeStatusThunk,
  getAuthUserProfile,
  selectAuthUserId,
  selectAuthUserProfileInformation,
  selectorStatusUser,
} from 'state';

export const Sidebar = (): ReactElement => {
  const dispatch = useAppDispatch();

  const userProfile = useSelector(selectAuthUserProfileInformation);
  const userId = useSelector(selectAuthUserId);
  const userStatus = useSelector(selectorStatusUser);

  const onChangeStatus = (status: string): void => {
    dispatch(changeStatusThunk({ status }));
  };

  useEffect(() => {
    if (userId) {
      dispatch(getAuthUserProfile(userId));
    }
  }, [userId]);

  const imgUrl = userProfile.photos.large || 'error';

  return (
    <section className={s.sidebarContainer}>
      <NavLink to={`${Path.SettingsProfile}`}>
        <div className={s.settingsButton}>
          <Button
            block
            shape="circle"
            icon={<SettingOutlined className={s.iconSettings} />}
          />
        </div>
      </NavLink>
      <div className={s.imgBlock}>
        <img
          className={s.imgBackground}
          src="https://oir.mobi/uploads/posts/2021-03/1616585889_54-p-krutoi-zadnii-fon-64.jpg"
          alt="backgroundImg"
        />
      </div>

      <div className={s.avatarWrapper}>
        <AvatarPhoto imgUrl={imgUrl} />
        <h2 className={s.name}>{userProfile.fullName}</h2>
        <SpanChange textValue={userStatus} onChangeText={onChangeStatus} />
      </div>
    </section>
  );
};
