import React, { ReactElement } from 'react';

import { Divider } from 'antd';

import s from './AboutUser.module.sass';

import { Nullable } from 'types';

export type AboutUserType = {
  aboutMe: Nullable<string>;
};

export const AboutUser = ({ aboutMe }: AboutUserType): ReactElement => (
  <>
    <b>About me:</b>
    <span className={s.textStyle}>{aboutMe}</span>
    <Divider style={{ margin: '5px 0' }} />
  </>
);
