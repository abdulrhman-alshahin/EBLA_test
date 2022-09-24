import { Observable, from, map } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../../_DATA';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserById(id: string): Observable<any> {
    return from(_getUsers()).pipe(map((u) => u[id]));
  }
  getUsers(): Observable<any> {
    return from(_getUsers());
  }
  constructor(private _snackBar: MatSnackBar) {}
}
