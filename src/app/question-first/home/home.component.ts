import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[FirstService],
})
export class HomeComponent implements OnInit {

  constructor(
    public _local: FirstService
  ) { }

  ngOnInit() {

  }
  _value;
  _index;
  getIndex = () => {
    this.arr.forEach((value,index)=>{
      this._value = value;
      this._index = index;

      if(this._index==this._local.mainObj.number){
        this._local.actualNum = this._value;
      }
      else if(this._index!=this._local.mainObj.number){
        // console.log(` this._index = ${this._index} and this._local.mainObj.number ${this._local.mainObj.number}`)
        // this._local.actualNum = "not a number";
        return;
      }

    })
    console.log(this._local.actualNum);
  }

  arr  = [2,3,10,15,26,35,50,63]

}
