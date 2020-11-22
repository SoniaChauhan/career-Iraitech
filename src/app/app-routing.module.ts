import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as _routes from "./routes";
const routes: Routes = _routes.routes;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
