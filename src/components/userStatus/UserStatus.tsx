import React, { ReactElement } from 'react';

import { Popover } from 'antd';

import s from './UserStatus.module.sass';

export type UserStatusType = {
  status: string;
};

const MAX_LENGTH_STATUS_STRING = 35;

export const UserStatus = ({ status }: UserStatusType): ReactElement => {
  const element: ReactElement = (
    <div className={s.informationBlock}>
      <div className={s.article}>{status}</div>
    </div>
  );

  if (status.length >= MAX_LENGTH_STATUS_STRING) {
    return (
      <Popover content={status} placement="bottom" title="Status">
        {element}
      </Popover>
    );
  }
  return <> {element}</>;
};
