import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import {
  Friends,
  Games,
  LoginPage,
  Posts,
  ProfileUser,
  Settings,
  Sidebar,
  Users,
} from 'components';
import { Path } from 'enum';
import s from 'pages/routers/Routers.module.sass';
import { selectIsAuthUser } from 'state';

export const Routers = (): ReactElement => {
  const isAuth = useSelector(selectIsAuthUser);

  return (
    <div className={s.content}>
      <div className={s.containerMain}>
        <Routes>
          <Route path={`${Path.Root}`} element={<Games />} />
          <Route
            path={`${Path.Root}${Path.Games}${Path.Root}${Path.Other}`}
            element={<Games />}
          />
          <Route
            path={`${Path.Users}${Path.Root}`}
            element={isAuth ? <Users /> : <LoginPage />}
          />

          <Route
            path={`${Path.Root}${Path.Friends}${Path.Root}`}
            element={isAuth ? <Friends /> : <LoginPage />}
          />
          <Route
            path={`${Path.Root}${Path.Posts}`}
            element={isAuth ? <Posts /> : <LoginPage />}
          />
          <Route
            path={`${Path.Root}${Path.Profile}${Path.Root}${Path.Id}`}
            element={isAuth ? <ProfileUser /> : <LoginPage />}
          />
          <Route
            path={`${Path.Root}${Path.Profile}`}
            element={isAuth ? <ProfileUser /> : <LoginPage />}
          />
          <Route
            path={`${Path.Root}${Path.SettingsProfile}`}
            element={isAuth ? <Settings /> : <LoginPage />}
          />

          <Route path={`${Path.Root}${Path.Login}`} element={<LoginPage />} />
        </Routes>
      </div>

      {isAuth && (
        <div className={s.containerOther}>
          <Sidebar />
        </div>
      )}
    </div>
  );
};
