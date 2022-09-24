import { createSelector } from '@ngrx/store';
import { IToastrState } from 'src/app/interfaces/IToastr';
import { AppState } from '../app.state';

export const selectToastr = createSelector(
  (state: AppState) => state.toast,
  (state: IToastrState) => state.message
);
