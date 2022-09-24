import { createAction, props } from '@ngrx/store';
import { IUser, IUsers } from 'src/app/interfaces/IUSer';

export const login = createAction('[User] Login', props<IUser>());
export const logout = createAction('[User] Logout');
export const loadUsers = createAction('[User] loadUsers');
export const loadUsersSuccess = createAction(
  '[User] loadSuccess Users',
  props<{ users: IUsers }>()
);
export const loadUsersFailure = createAction('[User] loadFailure Users ');
