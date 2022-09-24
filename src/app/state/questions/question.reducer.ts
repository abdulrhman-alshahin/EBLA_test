import { createReducer, on } from '@ngrx/store';
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
import { IQuestionsState } from 'src/app/interfaces/IQuestion';
import { state } from '@angular/animations';

export const initialQuestionsState: IQuestionsState = {
  loading: false,
  questions: {},
  selectedQuestion: null,
  error: null,
};

export const questionReducer = createReducer(
  initialQuestionsState,

  on(addQuestion, (state) => ({
    ...state,
  })),
  on(addQuestionSuccess, (state, question) => ({
    ...state,
    questions: {
      ...state.questions,
      [question.id]: { ...question },
    },
  })),
  on(addQuestionFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(loadQuestions, (state) => ({ ...state, loading: true })),
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    loading: false,
    error: null,
    questions: questions,
  })),
  on(loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(selectQuestion, (state) => ({
    ...state,
  })),
  on(selectQuestionSuccess, (state, question) => ({
    ...state,
    selectedQuestion: question,
  })),
  on(answerQuestion, (state) => ({
    ...state,
    loading: true,
  })),
  on(answerQuestionSuccess, (state, { authedUser, qid, answer }) => ({
    ...state,
    loading: false,
    questions: {
      ...state.questions,
      [qid]: {
        ...state.questions[qid],
        [answer]: {
          ...state.questions[qid][answer],
          votes: [...state.questions[qid][answer].votes, authedUser],
        },
      },
    },
  }))
);
