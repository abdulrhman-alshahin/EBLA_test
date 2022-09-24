import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { questionReducer } from './state/questions/question.reducer';
import { usersReducer } from './state/users/user.reducer';
import { QuestionEffects } from './state/questions/question.effects';
import { UserEffects } from './state/users/user.effects';
import { environment } from 'src/environments/environment';
import { ToastsEffects } from './state/toastr/toastr.effects';
import { toastrReducer } from './state/toastr/toastr.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      questions: questionReducer,
      users: usersReducer,
      toast: toastrReducer,
    }),
    EffectsModule.forRoot([QuestionEffects, UserEffects, ToastsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  exports: [StoreModule, EffectsModule, StoreDevtoolsModule],
})
export class StateModule {}
