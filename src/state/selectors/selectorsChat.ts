import { AppRootStore } from 'state/store';
import { ChatMessageType, ChatStatusType } from 'types';

export const selectorChatMessages = (state: AppRootStore): ChatMessageType[] =>
  state.chat.messages;

export const selectorChatIsOpenChat = (state: AppRootStore): boolean =>
  state.chat.isOpenChat;

export const selectorChatStatus = (state: AppRootStore): ChatStatusType =>
  state.chat.statusChat;
