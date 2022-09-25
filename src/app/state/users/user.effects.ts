import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, from, switchMap, tap, concatMap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { endLoading, startLoading } from '../loading/loading.actions';
import { start } from '../toastr/toastr.actions';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  login,
  logout,
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usersService: UserService) {}
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        from(this.usersService.getUsers()).pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersFailure()))
        )
      )
    )
  );

  loginToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      map((user) => start({ message: 'Welcome back!, ' + user.name }))
    )
  );

  logoutToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      map(() => start({ message: 'Logged out successfully!' }))
    )
  );
}
