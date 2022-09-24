import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/interfaces/IUSer';
import { ToastrService } from 'src/app/services/toastr.service';
import { AppState } from 'src/app/state/app.state';
import { addQuestion } from 'src/app/state/questions/question.actions';
import { selectsUser } from 'src/app/state/users/user.selector';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  newQuestionForm = this.fb.group({
    optionOne: this.fb.control('', Validators.required),
    optionTwo: this.fb.control('', Validators.required),
  });
  user!: IUser | null;
  ngOnInit(): void {
    this.store.select(selectsUser).subscribe((u) => (this.user = u));
  }
  onSubmit() {
    if (!this.newQuestionForm.valid) {
      this.newQuestionForm.markAllAsTouched();
      this.toastrService.open(
        'please Make sure that all inputs filled correctly',
        true
      );
    } else {
      this.store.dispatch(
        addQuestion({
          author: this.user?.id || '',
          optionOneText: this.newQuestionForm.value.optionOne,
          optionTwoText: this.newQuestionForm.value.optionTwo,
        })
      );
      this.router.navigateByUrl('/');
    }
  }
}
