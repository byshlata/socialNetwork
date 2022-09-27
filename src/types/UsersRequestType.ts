import { TypeUser } from 'enum';

export type UsersRequestType = {
  currentPage: number;
  pageSize: number;
  typeUser: TypeUser;
};
