import { ChatStatusType } from 'types/ChatStatusType';

export type StatusChangedSubscribersType = (status: ChatStatusType) => void;
