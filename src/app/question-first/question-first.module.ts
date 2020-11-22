import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { QuestionFirstRoutingModule } from './question-first-routing.module';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    QuestionFirstRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class QuestionFirstModule { }
