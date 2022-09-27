import React, { ReactElement } from 'react';

import s from '../style/SVGComponentForButton.module.sass';

export const SVGMessage = (): ReactElement => (
  <svg
    className={s.post}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 6.66666C13.0023 7.54657 12.7967 8.41458 12.4 9.19999C11.9296 10.1412 11.2065 10.9328 10.3116
      11.4862C9.41677 12.0396 8.3855 12.3329 7.33333 12.3333C6.45342 12.3356 5.58541 12.13 4.8 11.7333L1
      13L2.26667 9.19999C1.86995 8.41458 1.66437 7.54657 1.66667 6.66666C1.66707 5.61449 1.96041 4.58322 2.51381
      3.68836C3.06722 2.79349 3.85884 2.07037 4.8 1.59999C5.58541 1.20328 6.45342 0.997694 7.33333
      0.999988H7.66667C9.05623 1.07665 10.3687 1.66316 11.3528 2.64723C12.3368 3.63129 12.9233 4.94376
      13 6.33332V6.66666Z"
    />
  </svg>
);
