import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import s from './AvatarUser.module.sass';

import { Path } from 'enum';
import { UrlAvatarRouteType, UserShortType } from 'types';

type UserWrapperType = {
  typeURL: UrlAvatarRouteType;
  userInformation: UserShortType;
  shadow: boolean;
};

export const AvatarUser = ({
  userInformation,
  typeURL,
  shadow,
}: UserWrapperType): ReactElement => {
  const { id, name, status, photos } = userInformation;
  const containerClass = shadow ? `${s.shadow}` : `${s.dialogWrapper}`;
  return (
    <NavLink className={containerClass} to={`${Path.Root}${typeURL}${Path.Root}${id}`}>
      <Avatar icon={<UserOutlined />} size={50} src={photos.large} />
      <div className={s.dialogUser}>
        <div>{name}</div>
        <span className={s.userAbout}>{status}</span>
      </div>
    </NavLink>
  );
};
