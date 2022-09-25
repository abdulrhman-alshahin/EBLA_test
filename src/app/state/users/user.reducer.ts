import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  login,
  logout,
} from './user.actions';
import { IUsersState } from 'src/app/interfaces/IUSer';
import {
  addQuestionSuccess,
  answerQuestion,
  answerQuestionSuccess,
} from '../questions/question.actions';

export const initialUsersState: IUsersState = {
  users: {},
  user: null,
};

export const usersReducer = createReducer(
  initialUsersState,

  on(login, (state, user) => ({
    ...state,
    user: user,
  })),
  on(logout, (state) => ({ ...state, user: null })),
  on(loadUsers, (state) => ({ ...state, users: {} })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: { ...users },
  })),
  on(loadUsersFailure, (state) => ({ ...state, users: {} })),
  on(answerQuestion, (state) => ({
    ...state,
  })),
  on(addQuestionSuccess, (state, question) => ({
    ...state,
    users: {
      ...state.users,
      [question.author]: {
        ...state.users[question.author],
        questions: state.users[question.author].questions?.concat(question.id),
      },
    },
  })),
  on(answerQuestionSuccess, (state, { authedUser, qid, answer }) => ({
    ...state,
    users: {
      ...state.users,
      [authedUser]: {
        ...state.users[authedUser],
        answers: {
          ...state.users[authedUser].answers,
          [qid]: answer,
        },
      },
    },
    user: {
      ...state.user!,
      answers: {
        ...state.user!.answers,
        [qid]: answer,
      },
    },
  }))
);
