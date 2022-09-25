import { createReducer, on } from '@ngrx/store';
import { endLoading, startLoading } from './loading.actions';
import { ILoadingState } from 'src/app/interfaces/ILoading';

export const initialLoadingState: ILoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialLoadingState,
  on(startLoading, () => ({ loading: true })),
  on(endLoading, () => ({ loading: false }))
);
