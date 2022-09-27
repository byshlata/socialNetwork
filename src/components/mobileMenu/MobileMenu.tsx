import React, { ReactElement, useState } from 'react';

import { MainCircle } from './mainCircle/MainCircle';
import s from './MobileMenu.module.sass';
import { OtherCircle } from './otherCircle/OtherCircle';

import { NAN_BAR_ITEMS } from 'components/Header/NavBarContainer/NavBarContainer';
import { ElementMenu, MobileMenuPosition } from 'enum';

const POSITION_OPEN = [
  MobileMenuPosition.OneCircle,
  MobileMenuPosition.TwoCircle,
  MobileMenuPosition.TreeCircle,
  MobileMenuPosition.Four,
  MobileMenuPosition.Five,
  MobileMenuPosition.Six,
];
const POSITION_CLOSE = [
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
  MobileMenuPosition.StartPosition,
];

export const MobileMenu = (): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  let position: number[] = [];

  const onOpenMenu = (): void => {
    setIsOpenMenu(!isOpenMenu);
  };

  if (isOpenMenu) {
    position = POSITION_OPEN;
  } else {
    position = POSITION_CLOSE;
  }

  return (
    <div className={s.menuPosition}>
      <div className={s.menu}>
        <MainCircle isOpenMenu={isOpenMenu} onOpenMenu={onOpenMenu} />

        {NAN_BAR_ITEMS.map(({ nameItem, svg }, index) => (
          <OtherCircle
            svg={svg}
            nameItem={nameItem}
            key={nameItem}
            isOpenMenu={isOpenMenu}
            type={ElementMenu.Other}
            position={position[index]}
          />
        ))}
      </div>
    </div>
  );
};
