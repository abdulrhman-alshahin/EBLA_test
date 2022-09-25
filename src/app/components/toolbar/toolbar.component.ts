import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUSer';
import { AppState } from 'src/app/state/app.state';
import { selectLoading } from 'src/app/state/loading/loading.selector';
import { logout } from 'src/app/state/users/user.actions';
import { selectsUser } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  loading$!: Observable<boolean>;
  user$!: Observable<IUser | null>;
  selectedUser!: IUser;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.user$ = this.store.select(selectsUser);
  }
  logout() {
    this.store.dispatch(logout());
    this.router.navigateByUrl('login');
  }
}
