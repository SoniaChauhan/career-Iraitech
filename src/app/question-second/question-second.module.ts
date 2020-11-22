import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { QuestionSecondRoutingModule } from './question-second-routing.module';
import { FirstComponent } from './first/first.component';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [HomeComponent, FirstComponent, SecondComponent],
  imports: [
    QuestionSecondRoutingModule,
    FormsModule,
    CommonModule,   ]
})
export class QuestionSecondModule { }
