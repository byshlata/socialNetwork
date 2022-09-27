import React, { ReactElement } from 'react';

import s from './NavBar.module.sass';
import { NavBarItem } from './NavBarItem/NavBarItem';

import { NavBarItemType } from 'types';

type NavBarType = {
  navBarItems: NavBarItemType[];
};

export const NavBar = ({ navBarItems }: NavBarType): ReactElement => (
  <nav className={s.nav}>
    {navBarItems.map(m => (
      <NavBarItem key={m.nameItem} nameItem={m.nameItem} svg={m.svg} />
    ))}
  </nav>
);
