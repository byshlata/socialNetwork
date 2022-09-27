import React, { ReactElement } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom';

import s from './AvatarLink.module.sass';

import { Path } from 'enum';
import { useAppDispatch } from 'hooks';
import { isOpenChat } from 'state';
import { UrlAvatarRouteType } from 'types';

type AvatarLinkType = {
  photo: string;
  typeURL: UrlAvatarRouteType;
  userId: number;
};

export const AvatarLink = ({ photo, typeURL, userId }: AvatarLinkType): ReactElement => {
  const dispatch = useAppDispatch();

  const onCloseChat = (): void => {
    dispatch(isOpenChat(false));
  };
  return (
    <NavLink
      onClick={onCloseChat}
      className={s.link}
      to={`${Path.Root}${typeURL}${Path.Root}${userId}`}
    >
      <Avatar icon={<UserOutlined />} size={50} src={photo} />
    </NavLink>
  );
};
