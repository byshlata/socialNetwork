import React, { ReactElement } from 'react';

import s from './DialogMessage.module.sass';

import { TypeMessage } from 'enum';
import { DialogMessageType } from 'types';

export const DialogMessage = ({
  avatar,
  name,
  message,
  time,
  whoseMessage,
}: DialogMessageType): ReactElement => {
  const isAuthUser = whoseMessage === TypeMessage.AuthUser;

  const classMessage = isAuthUser ? s.messageAuthUser : s.messageOtherUser;

  const classWrapper = isAuthUser ? s.wrapperAuthUser : s.wrapperOtherUser;

  return (
    <li className={classMessage}>
      {!isAuthUser && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={s.link} href="#">
          <img className={s.avatar} src={avatar} alt="avatar" />
        </a>
      )}

      <div className={classWrapper}>
        <div className={s.name}>{name}</div>
        <div className={s.text}>{message}</div>
        <div className={s.time}>{time}</div>
      </div>
    </li>
  );
};
