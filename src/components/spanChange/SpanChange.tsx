import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import { Button, Input } from 'antd';

import s from './SpanChange.module.sass';
import { SpanChaneType, StatusInputType } from './types';

const ErrorStatus: StatusInputType = {
  error: 'error',
  placeholder: 'Error',
};

const ChangeStatus: StatusInputType = {
  error: '',
  placeholder: '',
};

export const SpanChange = ({ textValue, onChangeText }: SpanChaneType): ReactElement => {
  const [text, setText] = useState<string>('');
  const [isChange, setIsChange] = useState<boolean>(false);
  const [errorStatus, setErrorStatus] = useState<StatusInputType>(ChangeStatus);

  const onChange = (): void => {
    setIsChange(!isChange);
  };

  useEffect(() => {
    setText(textValue);
  }, [textValue]);

  const onSaveText = (): void => {
    if (text !== '') {
      setErrorStatus(ChangeStatus);
      onChangeText(text);
      setIsChange(!isChange);
    } else {
      setErrorStatus(ErrorStatus);
    }
  };

  const onBlurHandle = (): void => {
    if (errorStatus.error === '') {
      setText(textValue);
      setIsChange(!isChange);
    }
  };

  const changeText = (event: ChangeEvent<HTMLInputElement>): void => {
    setErrorStatus(ChangeStatus);
    setText(event.currentTarget.value);
  };

  return isChange ? (
    <div className={s.inputWrapper}>
      <Input
        onChange={changeText}
        showCount
        maxLength={70}
        onBlur={onBlurHandle}
        value={text}
        suffix={<span />}
        autoFocus
        status={errorStatus.error}
        placeholder={errorStatus.placeholder}
      />
      <Button className={s.button} type="primary" onMouseDown={onSaveText}>
        Save
      </Button>
    </div>
  ) : (
    <span className={s.span} onDoubleClick={onChange}>
      {text}
    </span>
  );
};
