import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser, IUsers } from 'src/app/interfaces/IUSer';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/state/app.state';
import { login } from 'src/app/state/users/user.actions';
import { selectAllUsers } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users$!: Observable<IUsers>;
  selectedUser!: IUser;
  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.select(selectAllUsers);
    this.users$.subscribe(
      (users) => (this.selectedUser = users[Object.keys(users)[0]])
    );
  }
  login() {
    this.store.dispatch(login(this.selectedUser));
    this.router.navigateByUrl('/');
  }
}
