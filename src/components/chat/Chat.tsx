import React, { ReactElement, useEffect } from 'react';

import Drawer from 'antd/lib/drawer';
import { useSelector } from 'react-redux';

import { MessageSendBlock, MessageWindow } from 'components';
import { useAppDispatch } from 'hooks';
import {
  isOpenChat,
  selectorChatIsOpenChat,
  selectorChatMessages,
  selectorChatStatus,
  sendMessageChat,
  setErrorMessage,
  startMessageListening,
  stopMessageListening,
} from 'state';

const MAX_ELEMENT_IN_MESSAGE = 95;

export const Chat = (): ReactElement => {
  const dispatch = useAppDispatch();

  const messagesByHistory = useSelector(selectorChatMessages);
  const isOpen = useSelector(selectorChatIsOpenChat);
  const status = useSelector(selectorChatStatus);

  const isStatusChat = status !== 'ready';

  useEffect(() => {
    dispatch(startMessageListening());
    return () => {
      dispatch(stopMessageListening());
    };
  }, []);

  useEffect(() => {
    if (status === 'error') {
      dispatch(setErrorMessage('Refresh page'));
    }
  }, [status]);

  const onClose = (): void => {
    dispatch(isOpenChat(false));
  };

  const sendMessageChatHandle = (message: string): void => {
    if (message.trim().length) {
      dispatch(sendMessageChat(message));
    }
  };

  return (
    <div>
      {messagesByHistory && (
        <Drawer title="Chat" placement="right" onClose={onClose} visible={isOpen}>
          <MessageWindow chatMessage={messagesByHistory} />
          <MessageSendBlock
            disabled={isStatusChat}
            sendTextMessage={sendMessageChatHandle}
            maxElement={MAX_ELEMENT_IN_MESSAGE}
          />
        </Drawer>
      )}
    </div>
  );
};
