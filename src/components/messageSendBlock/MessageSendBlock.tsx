import React, { KeyboardEvent, ReactElement, useState } from 'react';

import { ButtonWrapper, TextArea } from 'components';

type MessageSendBlockType = {
  sendTextMessage: (message: string) => void;
  maxElement: number;
  disabled: boolean;
};

const BUTTON_SEND_MESSAGE = 'Enter';

export const MessageSendBlock = ({
  sendTextMessage,
  maxElement,
  disabled,
}: MessageSendBlockType): ReactElement => {
  const [textMessage, setTextMessage] = useState<string>('');
  const [zeroElementCounter, setZeroElementCounter] = useState<number>(0);

  const addText = (value: string): void => {
    setTextMessage(value);
    setZeroElementCounter(value.length);
  };

  const sendMessage = (): void => {
    sendTextMessage(textMessage);
    setTextMessage('');
    setZeroElementCounter(0);
  };

  const addMessageMouseClick = (): void => {
    sendMessage();
  };

  const addMessageKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.code === BUTTON_SEND_MESSAGE && e.nativeEvent.ctrlKey && !disabled) {
      sendMessage();
    }
  };

  return (
    <>
      <TextArea
        editText={addText}
        name="message"
        placeholder="Send DialogMessage..."
        textInArea={textMessage}
        maxElement={maxElement}
        zeroElementCounter={zeroElementCounter}
        onKeyDown={addMessageKeyPress}
      />
      <ButtonWrapper disabled={disabled} onClick={addMessageMouseClick} />
    </>
  );
};
