import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

export const _routes: Routes = [
  { path: "", component: HomeComponent, data: { state: "module" } },
]
