import React, { ReactElement } from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { MenuLogin } from 'components';
import { Path } from 'enum';
import { selectAuthUserName, selectIsAuthUser } from 'state';

export const LoginUser = (): ReactElement => {
  const authUserName = useSelector(selectAuthUserName);
  const isAuth = useSelector(selectIsAuthUser);

  return (
    <div style={{ width: '150px' }}>
      {isAuth ? (
        <MenuLogin login={authUserName} />
      ) : (
        <NavLink to={`${Path.Login}`}>
          <LogoutOutlined />
        </NavLink>
      )}
    </div>
  );
};
