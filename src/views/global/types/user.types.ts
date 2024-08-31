export interface UserType {
  __v: number;
  _id: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  roles: string[];
  username: string;
}

export type UserEntity = [string, UserType];

export interface UsersResult {
  ids: string[];
  entities: { [id: string]: UserType };
}
