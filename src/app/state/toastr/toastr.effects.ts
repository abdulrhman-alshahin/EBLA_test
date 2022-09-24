import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { ToastrService } from 'src/app/services/toastr.service';
import { end, start } from './toastr.actions';

@Injectable()
export class ToastsEffects {
  constructor(
    private actions$: Actions,
    private toastrService: ToastrService
  ) {}

  start$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(start),
        tap((s) => this.toastrService.open(s.message)),
        map((x) => end())
      ),
    { dispatch: false }
  );
}
