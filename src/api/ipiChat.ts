import { EventChat } from 'enum';
import {
  ChatStatusType,
  MessagesReceivedSubscribersType,
  Nullable,
  StatusChangedSubscribersType,
  SubscriberType,
} from 'types';

const INITIAL_SUBSCRIBER: SubscriberType = {
  [EventChat.MessageReceived as const]: [],
  [EventChat.StatusChanged]: [],
};

let subscriber: SubscriberType = INITIAL_SUBSCRIBER;

let ws: Nullable<WebSocket>;

const DELAY_RESTART = 3000;

const messageHandle = (e: MessageEvent): void => {
  const newMessage = JSON.parse(e.data);
  subscriber[EventChat.MessageReceived].forEach(user => user(newMessage));
};

const notifySubscribersAboutStatus = (status: ChatStatusType): void => {
  subscriber[EventChat.StatusChanged].forEach(user => user(status));
};

const closeHandle = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  setTimeout(createChanel, DELAY_RESTART);
  notifySubscribersAboutStatus('pending');
};

const openHandle = (): void => {
  notifySubscribersAboutStatus('ready');
};

const errorHandle = (): void => {
  notifySubscribersAboutStatus('error');
};

const cleanUp = (): void => {
  ws?.removeEventListener('close', closeHandle);
  ws?.removeEventListener('message', messageHandle);
  ws?.removeEventListener('open', openHandle);
  ws?.removeEventListener('error', errorHandle);
};

function createChanel(): void {
  cleanUp();
  ws?.close();
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
  notifySubscribersAboutStatus('pending');
  ws.addEventListener('close', closeHandle);
  ws.addEventListener('message', messageHandle);
  ws.addEventListener('open', openHandle);
  ws.addEventListener('error', errorHandle);
}

export const APIChat = {
  start() {
    createChanel();
  },
  stop() {
    ws?.close();
    cleanUp();
    subscriber = INITIAL_SUBSCRIBER;
  },
  subscribeMessage(
    eventName: EventChat.MessageReceived,
    callback: Nullable<MessagesReceivedSubscribersType>,
  ) {
    if (callback !== null) {
      subscriber[eventName].push(callback);
    }
    return () => {
      subscriber[eventName] = subscriber[eventName].filter(user => user !== callback);
    };
  },
  unsubscribeMessage(
    eventName: EventChat.MessageReceived,
    callback: Nullable<MessagesReceivedSubscribersType>,
  ) {
    subscriber[eventName] = subscriber[eventName].filter(user => user !== callback);
  },
  subscribeStatus(
    eventName: EventChat.StatusChanged,
    callback: Nullable<StatusChangedSubscribersType>,
  ) {
    if (callback !== null) {
      subscriber[eventName].push(callback);
    }
    return () => {
      subscriber[eventName] = subscriber[eventName].filter(user => user !== callback);
    };
  },
  unsubscribeStatus(
    eventName: EventChat.StatusChanged,
    callback: Nullable<StatusChangedSubscribersType>,
  ) {
    subscriber[eventName] = subscriber[eventName].filter(user => user !== callback);
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
