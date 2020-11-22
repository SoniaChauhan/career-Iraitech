import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  Object = Object;

  ngOnInit() {
    this.setObjectView();
  }



  generalSettingGridObj;

  setObjectView(){
    this.generalSettingGridObj = {
      QuestionFirst:{
        nameToDisplay:"Question First",
        link:"/question-first",
        icon: "fa fa-handshake-o",
      },
      QuestionSecond:{
        nameToDisplay:"Question Second",
        link:"/question-second",
        icon: "fa fa-handshake-o",
      },
      QuestionThird:{
        nameToDisplay:"Question Third",
        link:"/question-third",
        icon: "fa fa-handshake-o",
      },
      QuestionFourth:{
        nameToDisplay:"Question Fourth",
        link:"/question-fourth",
        icon: "fa fa-handshake-o",
      },
    }
  }
}

