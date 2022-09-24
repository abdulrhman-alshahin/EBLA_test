import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadQuestions } from './state/questions/question.actions';
import { loadUsers } from './state/users/user.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}
  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
  openSnackBar(message: string, action: string) {}
}
