import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import s from './ChatMessage.module.sass';

import { AvatarLink } from 'components';
import { selectAuthUserId } from 'state';
import { ChatMessageType } from 'types';

export const ChatMessage = ({
  message,
  userId,
  userName,
  photo,
}: ChatMessageType): ReactElement => {
  const isAuthUserId = useSelector(selectAuthUserId);

  const isAuthUser = isAuthUserId === userId;

  const classMessage = isAuthUser ? s.messageAuthUser : s.messageOtherUser;

  const classWrapper = isAuthUser ? s.wrapperAuthUser : s.wrapperOtherUser;

  return (
    <li className={classMessage}>
      {!isAuthUser && <AvatarLink photo={photo} typeURL="profile" userId={userId} />}

      <div className={classWrapper}>
        <div className={s.name}>{userName}</div>
        <div className={s.text}>{message}</div>
      </div>
    </li>
  );
};
