import React, { ReactElement } from 'react';

import s from './Header.module.sass';
import { NavBarContainer } from './NavBarContainer/NavBarContainer';

export const Header = (): ReactElement => (
  <header className={s.header}>
    <NavBarContainer />
  </header>
);
