import React, { ReactElement } from 'react';

import 'antd/dist/antd.css';

import { Checkbox, Divider } from 'antd';

import s from './DescriptionJobSearch.module.sass';

import { Nullable } from 'types';

export type DescriptionJobSearchType = {
  isSearchJob: boolean;
  searchJobDescription: Nullable<string>;
};

export const DescriptionJobSearch = ({
  searchJobDescription,
  isSearchJob,
}: DescriptionJobSearchType): ReactElement => (
  <>
    <b>About job:</b>
    <div className={s.descriptionJobWrapper}>
      {isSearchJob !== null && <Checkbox disabled indeterminate={isSearchJob} />}
      <div className={s.textDescription}>{searchJobDescription}</div>
    </div>
    <Divider style={{ margin: '5px 0' }} />
  </>
);
