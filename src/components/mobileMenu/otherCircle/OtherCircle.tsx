import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import s from './OtherCircle.module.sass';

import { ElementMenu } from 'enum/elementMenu';

type OtherCircleType = {
  nameItem: string;
  svg: ReactElement;
  position: number;
  type: ElementMenu;
  isOpenMenu: boolean;
};

export const OtherCircle = ({
  svg,
  nameItem,
  isOpenMenu,
  position,
  type,
}: OtherCircleType): ReactElement => {
  const classTopDrop =
    isOpenMenu && type === ElementMenu.Other ? s.dropTopStart : s.dropTop;
  const classBottomDrop = isOpenMenu ? s.dropBottomStart : s.dropBottom;

  return (
    <NavLink to={nameItem}>
      <div className={s.otherCircleWrapper} style={{ top: `-${position}%` }}>
        <div className={s.otherCircleItem}>
          <span className={classTopDrop} />
          <div className={s.otherCircle}>
            <svg className={s.svgMobileMenu}>{svg}</svg>
          </div>
          <span className={classBottomDrop} />
        </div>
      </div>
    </NavLink>
  );
};
