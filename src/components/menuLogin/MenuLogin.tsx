import React, { ReactElement } from 'react';

import { ExportOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import { useAppDispatch } from 'hooks';
import { outUser } from 'state';
import { Nullable } from 'types';

export type MenuLoginType = {
  login: Nullable<string>;
};

export const MenuLogin = ({ login }: MenuLoginType): ReactElement => {
  const dispatch = useAppDispatch();

  const onOutApp = (): void => {
    dispatch(outUser());
  };

  return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Menu.SubMenu key="SubMenu" title={login} icon={<UserOutlined />}>
        <Menu.Item key="One" icon={<ExportOutlined />} onClick={onOutApp}>
          Out
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};
