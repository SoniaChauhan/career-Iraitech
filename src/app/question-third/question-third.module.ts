import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { QuestionThirdRoutingModule } from './question-third-routing.module';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    QuestionThirdRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class QuestionThirdModule { }
