import { createAction, props } from '@ngrx/store';
import {
  IAddQuestion,
  IQuestion,
  IQuestions,
} from 'src/app/interfaces/IQuestion';

export const addQuestion = createAction(
  '[Question] Add Question',
  props<IAddQuestion>()
);
export const addQuestionSuccess = createAction(
  '[Question] AddSuccess Question',
  props<IQuestion>()
);
export const addQuestionFailure = createAction(
  '[Question] AddFailure Question',
  props<{ error: string }>()
);

export const loadQuestions = createAction('[Question] Load Questions');
export const loadQuestionsSuccess = createAction(
  '[Question] loadSuccess Question',
  props<{ questions: IQuestions }>()
);
export const loadQuestionsFailure = createAction(
  '[Question] loadFailure Question',
  props<{ error: string }>()
);

export const selectQuestion = createAction(
  '[Question] select Question',
  props<{ id: string }>()
);
export const selectQuestionSuccess = createAction(
  '[Question] selectSuccess Question',
  props<IQuestion>()
);

export const answerQuestion = createAction(
  '[Question] answer Question',
  props<{
    authedUser: string;
    qid: string;
    answer: 'optionOne' | 'optionTwo';
  }>()
);

export const answerQuestionSuccess = createAction(
  '[Question] answerSuccess Question',
  props<{
    authedUser: string;
    qid: string;
    answer: 'optionOne' | 'optionTwo';
  }>()
);
