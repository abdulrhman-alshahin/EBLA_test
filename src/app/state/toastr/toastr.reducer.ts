import { createReducer, on } from '@ngrx/store';
import { end, start } from './toastr.actions';
import { IToastrState } from 'src/app/interfaces/IToastr';

export const initialToastsState: IToastrState = {
  message: null,
  warn: false,
};

export const toastrReducer = createReducer(
  initialToastsState,
  on(start, (state, { message, warn }) => ({ ...state, message })),
  on(end, (state) => ({ ...state, message: null }))
);
