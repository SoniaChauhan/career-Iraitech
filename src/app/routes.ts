import { Routes } from "@angular/router";

let routes: Routes = [
  {
    path: "question-first",
    loadChildren: "./question-first/question-first.module#QuestionFirstModule",
  //  canLoad: [ForwardGuardService],
    //canActivateChild: [ForwardGuardService],
    data: { state: "module" }
  },
  {
    path: "question-second",
    loadChildren: "./question-second/question-second.module#QuestionSecondModule",
  //  canLoad: [ForwardGuardService],
    //canActivateChild: [ForwardGuardService],
    data: { state: "module" }
  },
  {
    path: "question-third",
    loadChildren: "./question-third/question-third.module#QuestionThirdModule",
  //  canLoad: [ForwardGuardService],
    //canActivateChild: [ForwardGuardService],
    data: { state: "module" }
  },
  {
    path: "question-fourth",
    loadChildren: "./question-fourth/question-fourth.module#QuestionFourthModule",
  //  canLoad: [ForwardGuardService],
    //canActivateChild: [ForwardGuardService],
    data: { state: "module" }
  },
]

export { routes };
