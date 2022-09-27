import { TypeMessage } from 'enum';

export type DialogMessageType = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
  whoseMessage: TypeMessage.AuthUser | TypeMessage.OtherUser;
};
