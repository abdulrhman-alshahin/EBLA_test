import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuestion } from 'src/app/interfaces/IQuestion';
import { IUser } from 'src/app/interfaces/IUSer';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question!: IQuestion;
  user$!: Observable<IUser>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUserById(this.question.author);
    // console.log(this.question);
  }
}
