import { ChatMessageType } from 'types';

export type MessagesReceivedSubscribersType = (message: ChatMessageType[]) => void;
