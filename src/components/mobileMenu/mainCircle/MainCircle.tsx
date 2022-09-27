import React, { ReactElement } from 'react';

import s from './MainCircle.module.sass';

type MainCircleType = {
  onOpenMenu: () => void;
  isOpenMenu: boolean;
};

export const MainCircle = ({ onOpenMenu, isOpenMenu }: MainCircleType): ReactElement => {
  const classDrop = isOpenMenu ? s.dropStart : s.drop;

  return (
    <div className={s.mainCircleWrapper}>
      <div className={s.mainCircleItem}>
        <button className={s.mainCircle} type="button" onClick={onOpenMenu}>
          +
        </button>
        <span className={classDrop} />
      </div>
    </div>
  );
};
