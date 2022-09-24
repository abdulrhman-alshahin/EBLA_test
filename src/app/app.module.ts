import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './pages/login/login.component';
import { CreateQuestionComponent } from './pages/create-question/create-question.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StateModule } from './state.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateQuestionComponent,
    LeaderboardComponent,
    HomeComponent,
    QuestionComponent,
    QuestionCardComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    StateModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
