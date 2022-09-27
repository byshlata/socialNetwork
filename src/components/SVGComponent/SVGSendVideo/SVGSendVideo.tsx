import React, { ReactElement } from 'react';

import s from '../style/SVGComponentForButton.module.sass';

export const SvgSendVideo = (): ReactElement => (
  <svg
    className={s.postSend}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M19.038 3H4.962C3.87842 3 3 3.87842 3 4.962V19.038C3 20.1216 3.87842 21 4.962
        21H19.038C20.1216 21 21 20.1216 21 19.038V4.962C21 3.87842 20.1216 3 19.038 3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.50053 3V21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 3V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12.0003H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7.50043H7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 16.5H7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 16.5H21" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 7.50043H21" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);
