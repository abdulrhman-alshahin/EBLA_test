import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/interfaces/IQuestion';
import { IUser } from 'src/app/interfaces/IUSer';
import { QuestionsService } from 'src/app/services/questions.service';
import { AppState } from 'src/app/state/app.state';
import { selectLoading } from 'src/app/state/loading/loading.selector';
import {
  answerQuestion,
  selectQuestion,
} from 'src/app/state/questions/question.actions';
import { selectSelectedQuestion } from 'src/app/state/questions/question.selector';
import { selectsUser } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  result = false;

  myAnswer!: 'optionOne' | 'optionTwo';
  qid!: string;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}
  question$ = this.store.select(selectSelectedQuestion);
  user$!: Observable<IUser | null>;
  loading$ = this.store.select(selectLoading);

  ngOnInit(): void {
    this.qid = this.route.snapshot.paramMap.get('id') || '';
    this.store.dispatch(selectQuestion({ id: this.qid }));
    this.user$ = this.store.select(selectsUser);
    this.user$.subscribe((d) => (this.myAnswer = d?.answers![this.qid]!));
    if (this.myAnswer) {
      this.result = true;
    }
  }
  ngOnDestroy(): void {}
  answerAndViewResult() {
    this.result = true;
    let userId = '';
    this.user$.subscribe((data) => (userId = data?.id!));
    this.store.dispatch(
      answerQuestion({
        answer: this.myAnswer,
        qid: this.qid,
        authedUser: userId,
      })
    );
  }
  optionTwoCount(question: IQuestion) {
    return question.optionTwo.votes.length;
  }
  optionOneCount(question: IQuestion) {
    return question.optionOne.votes.length;
  }
  answersCount(question: IQuestion) {
    return this.optionTwoCount(question) + this.optionOneCount(question);
  }
}
