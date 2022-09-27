import React, { ReactElement, useEffect } from 'react';

import { message } from 'antd';
import { useSelector } from 'react-redux';

import s from './App.module.sass';

import {
  ButtonDragAndDrop,
  Chat,
  Header,
  Routers,
  MobileMenu,
  Spinner,
} from 'components';
import { useAppDispatch } from 'hooks';
import {
  deleteAuthUserInitiationData,
  getAuthUser,
  selectErrorMessage,
  selectIsAuthUser,
  selectIsInitialized,
} from 'state';

export const App = React.memo((): ReactElement => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuthUser);
  const errorMessage = useSelector(selectErrorMessage);

  const isInitialized = useSelector(selectIsInitialized);

  useEffect(() => {
    dispatch(getAuthUser());
    return () => {
      dispatch(deleteAuthUserInitiationData());
    };
  }, []);

  useEffect(() => {
    if (errorMessage) {
      message.error(errorMessage);
    }
  }, [errorMessage]);

  if (isInitialized) {
    return <Spinner isLoading={isInitialized} />;
  }

  return (
    <div className={s.wrapper}>
      <Header />
      <Routers />
      <Chat />
      {isAuth && <ButtonDragAndDrop />}
      <MobileMenu />
    </div>
  );
});
