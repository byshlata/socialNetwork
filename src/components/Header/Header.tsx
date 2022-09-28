import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import s from './Header.module.sass';
import { NavBarContainer } from './NavBarContainer/NavBarContainer';

import { LinerProgress } from 'components/linerProgress/LinerProgress';
import { selectIsLoading } from 'state';

export const Header = (): ReactElement => {
  const isAppLoading = useSelector(selectIsLoading);
  return (
    <header className={s.header}>
      <NavBarContainer />
      <LinerProgress isLoading={isAppLoading} />
    </header>
  );
};
