import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUSer';
import { AppState } from 'src/app/state/app.state';
import { selectAllUsers } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  users!: IUser[];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(selectAllUsers)
      .pipe(
        map((users) =>
          Object.values(users)
            .map((user) => ({
              ...user,
              score: this.getScore(user),
            }))
            .sort((a, b) => -a.score + b.score)
        )
      )
      .subscribe((users) => (this.users = users));
  }
  getAnswersCount(user: IUser) {
    return user.answers ? Object.keys(user.answers).length : 0;
  }
  getQuestionCount(user: IUser) {
    return user.questions ? user.questions.length : 0;
  }
  getScore(user: IUser) {
    return user.questions && user.answers
      ? Object.keys(user.answers).length + user.questions.length
      : 0;
  }
  getColor(i: number) {
    if (i == 0) return 'color:#FFD700;';
    else if (i == 1) return 'color:#C0C0C0;';
    else if (i == 2) return 'color:#CD7F32;';
    else return null;
  }
}
