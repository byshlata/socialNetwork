import React, { ChangeEvent, ReactElement, useState } from 'react';

import 'antd/dist/antd.css';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { useDebounce } from 'hooks';

export type InputSearchType = {
  setDebouncedValue: (value: string) => void;
};

const DEBOUNCE_DELAY = 500;

export const InputSearch = ({ setDebouncedValue }: InputSearchType): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedSearchTerm = useDebounce(searchValue, DEBOUNCE_DELAY);

  const onChangeHandle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setSearchValue(e.currentTarget.value);
  };

  if (debouncedSearchTerm) {
    setDebouncedValue(debouncedSearchTerm);
  }

  return (
    <Input
      placeholder="input name user..."
      onChange={onChangeHandle}
      prefix={<SearchOutlined />}
      style={{
        width: '30%',
      }}
    />
  );
};
