import React, { ReactElement } from 'react';

import s from './LinerProgress.module.sass';

export type LinerProgressType = {
  isLoading: boolean;
};

export const LinerProgress = ({ isLoading }: LinerProgressType): ReactElement =>
  isLoading ? (
    <div className={s.linear}>
      <div className={s.indeterminate} />
    </div>
  ) : (
    <div />
  );
