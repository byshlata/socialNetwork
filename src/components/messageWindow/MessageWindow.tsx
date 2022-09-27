import React, { ReactElement, UIEvent, useEffect, useRef, useState } from 'react';

import { v1 } from 'uuid';

import s from './MessageWindow.module.sass';

import { ChatMessage } from 'components';
import { ChatMessageType, Nullable } from 'types';

const SCROLL_INDEX = 10;

export type MessageWindowType = {
  chatMessage: ChatMessageType[];
};

let messageElements: Nullable<ReactElement[]>;

export const MessageWindow = React.memo(
  ({ chatMessage }: MessageWindowType): ReactElement => {
    const messagesEndRef = useRef<Nullable<HTMLDivElement>>(null);
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);

    const scrollToBottom = (): void => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    useEffect(() => {
      if (isAutoScroll) {
        scrollToBottom();
      }
    }, [chatMessage]);

    if (chatMessage) {
      messageElements = chatMessage?.map(({ message, photo, userId, userName }) => (
        <ChatMessage
          key={v1()}
          message={message}
          photo={photo}
          userId={userId}
          userName={userName}
        />
      ));
    } else {
      messageElements = null;
    }

    const onScrollHandle = (e: UIEvent<HTMLUListElement>): void => {
      const element = e.currentTarget;
      if (
        element.scrollHeight - element.scrollTop - element.clientHeight <
        SCROLL_INDEX
      ) {
        setIsAutoScroll(true);
      } else {
        setIsAutoScroll(false);
      }
    };

    return (
      <ul className={s.messageWindow} onScroll={onScrollHandle}>
        {messageElements}
        <div ref={messagesEndRef} />
      </ul>
    );
  },
);
