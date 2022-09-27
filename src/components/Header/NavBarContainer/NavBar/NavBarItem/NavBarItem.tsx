import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './NavBarItem.module.sass';

import { NavBarItemType } from 'types';

export const NavBarItem: React.FC<NavBarItemType> = ({ nameItem, svg }) => (
  <div className={s.item}>
    <NavLink className={navData => (navData.isActive ? s.active : s.link)} to={nameItem}>
      <svg className={s.svgNavBar}>{svg}</svg>
      <div>{nameItem}</div>
    </NavLink>
  </div>
);
