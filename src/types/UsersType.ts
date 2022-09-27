import { TypeUser } from 'enum/typeUser';

export type UsersType = {
  callbackSearchUsers: (currentPage: number, tern: string) => void;
  callbackGetUsers: (currentPage: number) => void;
  typeUser: TypeUser;
};
