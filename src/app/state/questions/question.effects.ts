import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
} from './question.actions';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { QuestionsService } from 'src/app/services/questions.service';
import { start } from '../toastr/toastr.actions';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private questionsService: QuestionsService
  ) {}

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      switchMap(() =>
        from(this.questionsService.getAllQuestions()).pipe(
          map((questions) => loadQuestionsSuccess({ questions })),
          catchError((error) => of(loadQuestionsFailure({ error })))
        )
      )
    )
  );

  selectQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectQuestion),
      switchMap(({ id }) =>
        from(this.questionsService.getQuestionsById(id)).pipe(
          map((question) => selectQuestionSuccess(question))
        )
      )
    )
  );

  addQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addQuestion),
      switchMap(({ author, optionOneText, optionTwoText }) =>
        this.questionsService
          .addQuestion({ author, optionOneText, optionTwoText })
          .pipe(
            map((question) => addQuestionSuccess(question)),
            catchError((error) => of(addQuestionFailure({ error })))
          )
      )
    )
  );
  addQuestionToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addQuestionSuccess),
      map(() => start({ message: 'Your Question added successfully!' }))
    )
  );
  answerQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(answerQuestion),
      switchMap(({ authedUser, qid, answer }) =>
        this.questionsService
          .addAnswer({ authedUser, qid, answer })
          .pipe(map(() => answerQuestionSuccess({ authedUser, qid, answer })))
      )
    )
  );
  answerToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(answerQuestionSuccess),
      map(() => start({ message: 'Your answer saved successfully!' }))
    )
  );
}
