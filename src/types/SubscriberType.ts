import { EventChat } from 'enum';
import { MessagesReceivedSubscribersType } from 'types/MessagesReceivedSubscribersType';
import { StatusChangedSubscribersType } from 'types/StatusChangedSubscribersType';

export type SubscriberType = {
  [EventChat.MessageReceived]: MessagesReceivedSubscribersType[];
  [EventChat.StatusChanged]: StatusChangedSubscribersType[];
};
