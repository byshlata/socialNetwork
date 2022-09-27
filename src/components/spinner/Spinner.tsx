import React, { ReactElement } from 'react';

import s from './Spinner.module.sass';

export type SpinnerType = {
  isLoading: boolean;
};

export const Spinner = ({ isLoading }: SpinnerType): ReactElement =>
  isLoading ? (
    <div className={s.loader}>
      <div className={s.one} />
      <div className={s.two} />
      <div className={s.three} />
    </div>
  ) : (
    <div />
  );
