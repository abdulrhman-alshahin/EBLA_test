import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { CreateQuestionComponent } from './pages/create-question/create-question.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { LoginComponent } from './pages/login/login.component';
import { QuestionComponent } from './pages/question/question.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add', component: CreateQuestionComponent, canActivate: [AuthGuard] },
  {
    path: 'question/:id',
    component: QuestionComponent,
    canActivate: [AuthGuard],
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
