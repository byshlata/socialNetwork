import React, { ReactElement } from 'react';

import {
  FacebookOutlined,
  GithubOutlined,
  GlobalOutlined,
  InstagramOutlined,
  MailOutlined,
  TwitterOutlined,
  UserOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import s from './ContastsUserBlock.module.sass';

import { ComponentsUserTypes } from 'types';
import { convertObjectInArray } from 'utils';

export type ProfileContactType = {
  contacts: ComponentsUserTypes;
};

const ICON: { [key: string]: ReactElement } = {
  facebook: <FacebookOutlined />,
  website: <GlobalOutlined />,
  vk: <UserOutlined />,
  twitter: <TwitterOutlined />,
  instagram: <InstagramOutlined />,
  youtube: <YoutubeOutlined />,
  github: <GithubOutlined />,
  mainLink: <MailOutlined />,
};

export const ContactsUserBlock: React.FC<ProfileContactType> = ({ contacts }) => {
  const contactsArray = convertObjectInArray(contacts);

  return (
    <div className={s.contactsUserBlockWrapper}>
      {/* eslint-disable-next-line array-callback-return,consistent-return */}
      {contactsArray.map(element => {
        if (element.value.link) {
          return (
            <Link
              className={s.link}
              target="_blank"
              key={element.value.contact}
              to={element.value.link}
              rel="noopener noreferrer"
            >
              {ICON[element.value.contact]}
            </Link>
          );
        }
      })}
    </div>
  );
};
