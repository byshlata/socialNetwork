import React, { ReactElement } from 'react';

import s from './ButtonSending.module.sass';

type ButtonSendingType = {
  svg: ReactElement;
  onClick: () => void;
  disabled: boolean;
};

export const ButtonSending: React.FC<ButtonSendingType> = props => {
  const { svg, onClick, disabled } = props;
  const classButton = disabled ? s.buttonDisabled : s.button;
  return (
    <button disabled={disabled} type="button" className={classButton} onClick={onClick}>
      {svg}
    </button>
  );
};
