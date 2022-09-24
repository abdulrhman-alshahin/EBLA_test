import { createSelector } from '@ngrx/store';
import { IQuestionsState } from 'src/app/interfaces/IQuestion';
import { AppState } from '../app.state';

export const selectAllQuestions = createSelector(
  (state: AppState) => state.questions,
  (state: IQuestionsState) => state.questions
);

export const selectLoading = createSelector(
  (state: AppState) => state.questions,
  (state: IQuestionsState) => state.loading
);

export const selectSelectedQuestion = createSelector(
  (state: AppState) => state.questions,
  (state: IQuestionsState) => state.selectedQuestion
);
