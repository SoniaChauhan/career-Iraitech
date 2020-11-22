import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { _routes } from "./routes";


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(_routes)],
  exports: [RouterModule]
})
export class QuestionSecondRoutingModule { }
