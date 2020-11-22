import { Component, OnInit } from '@angular/core';
import { ThirdService } from '../third.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _local :ThirdService,
  ) { }

  public multiContact = [];

  ngOnInit() {
     this.multiContact.push({});
  }
////////// add number//////////
  addAnotherPhoneNum = () => {
    this.multiContact.push({});
  }
////////// delete number//////////
  deleteContact = (index) => {
    this.multiContact.splice(index, 1)
  }
//////submit/////////////////////
_key = 0 ;
  onsubmit = () =>{
    this.multiContact.forEach((val,ind)=>{
      for (let x in val) {
        this._key++;
         val['phone'+this._key] = val['phone'];
         delete val[ 'phone' ];
      }
    })
    console.log(this.multiContact);
  }


}
