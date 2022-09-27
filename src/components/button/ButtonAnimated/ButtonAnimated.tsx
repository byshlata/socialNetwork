import React, { ReactElement } from 'react';

import s from './ButtonAnimated.module.sass';

export type ButtonLikePropsType = {
  svg: ReactElement;
  text: number | string;
  onClick: () => void;
};

export const ButtonAnimated: React.FC<ButtonLikePropsType> = ({ svg, text, onClick }) => (
  <div className={s.buttonAnimatedWrapper}>
    <button onClick={() => onClick()} type="button" className={s.buttonAnimated}>
      {svg}
    </button>
    <span className={s.textButtonAnimated}>{text}</span>
  </div>
);
