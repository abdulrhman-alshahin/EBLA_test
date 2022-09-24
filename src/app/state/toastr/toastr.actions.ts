import { createAction, props } from '@ngrx/store';

export const start = createAction(
  '[Toastr] start',
  props<{ message: string; warn?: boolean }>()
);
export const end = createAction('[Toastr] start');
