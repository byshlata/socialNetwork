import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';
import { Pagination } from 'antd';

import s from './PaginationContainer.module.sass';

import { PaginationOption } from 'enum';

type PaginationContainerType = {
  totalCount: number;
  onChangePage: (page: number) => void;
  disabled: boolean;
};

export const PaginationContainer = ({
  onChangePage,
  totalCount,
  disabled,
}: PaginationContainerType): ReactElement => {
  const onChangePagination = (page: number): void => {
    onChangePage(page);
  };

  return (
    <div className={s.paginationWrapper}>
      <Pagination
        defaultCurrent={1}
        total={totalCount}
        pageSize={PaginationOption.PageSize}
        showSizeChanger={false}
        onChange={onChangePagination}
        disabled={disabled}
        size="default"
      />
    </div>
  );
};
