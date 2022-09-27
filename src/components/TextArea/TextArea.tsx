import React, { ChangeEvent, KeyboardEvent, ReactElement } from 'react';

import s from './TextArea.module.sass';

type TextAreaType = {
  editText: (value: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder: string;
  textInArea: string;
  maxElement: number;
  zeroElementCounter: number;
};

export const TextArea = ({
  editText,
  name,
  placeholder,
  textInArea,
  maxElement,
  zeroElementCounter,
  onKeyDown,
}: TextAreaType): ReactElement => {
  const addText = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    if (maxElement > 0 && e.currentTarget.value.trim().length <= maxElement) {
      editText(e.currentTarget.value);
    }
  };

  return (
    <form className={s.form} method="post" action="#">
      <div className={s.textAreaWrapper}>
        <textarea
          value={textInArea}
          className={s.textArea}
          name={name}
          placeholder={placeholder}
          onChange={addText}
          onKeyDown={onKeyDown}
        />
        <span className={s.counterWrapper}>
          {zeroElementCounter}/{maxElement}
        </span>
      </div>
    </form>
  );
};
