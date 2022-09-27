import React, { ReactElement } from 'react';

import s from '../style/SVGComponentForButton.module.sass';

export const SvgSendMessage = (): ReactElement => (
  <svg className={s.postSend} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M14.6667 1.33331L7.33333 8.66665"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 1.33331L10 14.6666L7.33333 8.66665L1.33333 5.99998L14.6667 1.33331Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
