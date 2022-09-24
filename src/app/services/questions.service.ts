import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { IQuestion, IQuestions } from '../interfaces/IQuestion';
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../../_DATA';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  getAllQuestions(): Observable<any> {
    return from(_getQuestions());
  }

  getQuestionsById(id: string): Observable<IQuestion> {
    return from(_getQuestions()).pipe(map((questions) => questions[id]));
  }

  addQuestion(question: {
    author: any;
    optionOneText: any;
    optionTwoText: any;
  }): Observable<IQuestion> {
    return from(_saveQuestion(question));
  }

  addAnswer({ authedUser, qid, answer }: any): Observable<IQuestion> {
    return from(_saveQuestionAnswer({ authedUser, qid, answer }));
  }
}
