import { IQuestionsState } from '../interfaces/IQuestion';
import { IToastrState } from '../interfaces/IToastr';
import { IUsersState } from '../interfaces/IUSer';

export interface AppState {
  questions: IQuestionsState;
  users: IUsersState;
  toast: IToastrState;
}
