import { ChatMessageType } from 'types';
import { ChatStatusType } from 'types/ChatStatusType';

export type ChatType = {
  messages: ChatMessageType[];
  isOpenChat: boolean;
  statusChat: ChatStatusType;
};
