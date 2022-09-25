import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IQuestions } from 'src/app/interfaces/IQuestion';
import { IUser } from 'src/app/interfaces/IUSer';
import { AppState } from 'src/app/state/app.state';
import { loadQuestions } from 'src/app/state/questions/question.actions';
import { selectAllQuestions } from 'src/app/state/questions/question.selector';
import { selectsUser } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  answered = true;
  questions$!: Observable<IQuestions>;
  user$!: Observable<IUser | null>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadQuestions());
    this.questions$ = this.store.select(selectAllQuestions);
    this.user$ = this.store.select(selectsUser);
  }
  checkIfAnswered(question: any) {
    let answers = this.getAnswers();
    return this.answered
      ? answers.includes(question.key)
      : !answers.includes(question.key);
  }
  getAnswers() {
    let answers: string[] = [];
    this.user$.subscribe((d) => {
      answers = Object.keys({ ...d?.answers });
    });
    return answers;
  }
  getAnsweredCount() {
    return this.getAnswers().length;
  }
  getUnansweredCount() {
    let questions = {};
    this.questions$.subscribe((data) => (questions = data));
    let count = Object.keys(questions).length - this.getAnswers().length;
    return count < 0 ? '' : count;
  }
}
