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

export const initialQuestionsState: IQuestionsState = {
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

  on(loadQuestions, (state) => ({ ...state })),
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    error: null,
    questions: questions,
  })),
  on(loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error: error,
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
  })),
  on(answerQuestionSuccess, (state, { authedUser, qid, answer }) => ({
    ...state,
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
    selectedQuestion: {
      ...state.selectedQuestion!,
      [answer]: {
        ...state.selectedQuestion![answer],
        votes: [...state.selectedQuestion![answer].votes, authedUser],
      },
    },
  }))
);
