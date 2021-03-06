import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

import { FormsModule } from './forms/forms.module';
import { UsersModule } from './users/users.module';
import { AnswersModule } from './answers/answers.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormService } from './shared/form.service';
import { QuestionService } from './shared/question.service';
import { AnswerService } from './shared/answer.service';
import { AnswerConfirmationComponent } from './answer-confirmation/answer-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
    AnswerConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    routing,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
  ],
  providers: [Angular2TokenService, FormService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
