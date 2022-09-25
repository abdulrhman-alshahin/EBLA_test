import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AppState } from '../app.state';
import {
  addQuestion,
  addQuestionFailure,
  addQuestionSuccess,
  answerQuestion,
  answerQuestionSuccess,
  loadQuestions,
  loadQuestionsFailure,
  loadQuestionsSuccess,
  selectQuestion,
  selectQuestionSuccess,
} from '../questions/question.actions';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from '../users/user.actions';
import { endLoading, startLoading } from './loading.actions';
import { selectLoading } from './loading.selector';

@Injectable()
export class LoadingEffects {
  constructor(private actions$: Actions, private store: Store<AppState>) {}

  startloading$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startLoading),
        tap((s) => this.store.select(selectLoading)),
        map((x) => endLoading())
      ),
    { dispatch: false }
  );
  loadingStarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        loadUsers,
        addQuestion,
        loadQuestions,
        selectQuestion,
        answerQuestion
      ),
      map(() => startLoading())
    )
  );

  loadingEnds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        loadUsersSuccess,
        loadUsersFailure,
        addQuestionSuccess,
        addQuestionFailure,
        loadQuestionsSuccess,
        loadQuestionsFailure,
        selectQuestionSuccess,
        answerQuestionSuccess
      ),
      map(() => endLoading())
    )
  );
}
