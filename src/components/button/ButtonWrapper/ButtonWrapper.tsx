import React, { ReactElement } from 'react';

import { ButtonSending } from '../ButtonSending/ButtonSending';

import s from './ButtonWrapper.module.sass';

import {
  SVGSendFile,
  SvgSendMessage,
  SvgSendPicture,
  SvgSendVideo,
} from 'components/SVGComponent';

type ButtonWrapperType = {
  onClick: () => void;
  disabled: boolean;
};

export const ButtonWrapper = ({ onClick, disabled }: ButtonWrapperType): ReactElement => (
  <div className={s.menuSending}>
    <ButtonSending disabled={disabled} svg={<SVGSendFile />} onClick={onClick} />
    <ButtonSending disabled={disabled} svg={<SvgSendVideo />} onClick={onClick} />
    <ButtonSending disabled={disabled} svg={<SvgSendPicture />} onClick={onClick} />
    <ButtonSending disabled={disabled} svg={<SvgSendMessage />} onClick={onClick} />
  </div>
);
