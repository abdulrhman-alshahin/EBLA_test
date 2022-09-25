import { createSelector } from '@ngrx/store';
import { ILoadingState } from 'src/app/interfaces/ILoading';
import { AppState } from '../app.state';

export const selectLoading = createSelector(
  (state: AppState) => state.loading,
  (state: ILoadingState) => state.loading
);
