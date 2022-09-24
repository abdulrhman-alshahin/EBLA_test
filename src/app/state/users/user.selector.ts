import { createSelector } from '@ngrx/store';
import { IUser, IUsersState } from 'src/app/interfaces/IUSer';
import { AppState } from '../app.state';

export const selectAllUsers = createSelector(
  (state: AppState) => state.users,
  (state: IUsersState) => state.users
);

export const selectLoading = createSelector(
  (state: AppState) => state.users,
  (state: IUsersState) => state.loading
);

export const selectsUser = createSelector(
  (state: AppState) => state.users,
  (state: IUsersState) => state.user
);
