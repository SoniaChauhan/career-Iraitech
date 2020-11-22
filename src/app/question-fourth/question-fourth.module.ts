import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { QuestionFourthRoutingModule } from './question-fourth-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';

import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent, OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent],
  imports: [
    QuestionFourthRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class QuestionFourthModule { }
