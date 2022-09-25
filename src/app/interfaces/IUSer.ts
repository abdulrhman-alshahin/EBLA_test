export interface IUsersState {
  users: IUsers;
  user: IUser | null;
}
export interface IUsers {
  [key: string]: IUser;
}
export interface IUser {
  id: string;
  name: string;
  avatarURL: string;
  answers?: { [key: string]: 'optionOne' | 'optionTwo' };
  questions?: string[];
  score: number;
}
