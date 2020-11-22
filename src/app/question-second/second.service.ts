import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }

  isAddedXComponent = false;
  isAddedYComponent = false;

  public itemsY = []
  _indexForYcomponentAdded;
  //  _indexToCheckRepeated = 0;
  addYcomponent = (_index) =>{
    this._indexForYcomponentAdded = _index;
    this.itemsY.push({});
    this.isAddedYComponent = true;
  }


  //////////////////////
  public itemsX = []
  public addXcomponent = () => {
    this.itemsX.push({});
     this.isAddedXComponent = true;
  }

  ///////////////////////
  addXname = () => {
    this.itemsX.forEach((val,ind)=>{
      for (let x in val) {
        this._keyX++;
         val['X'+this._keyX] = val['X'];
         delete val[ 'X' ];
      }
    })
    console.log(this.itemsX);
  }

  addYname = () => {
    this.itemsY.forEach((val,ind)=>{
      for (let x in val) {
        this._keyY++;
         val['Y'+this._keyY] = val['Y'];
         delete val[ 'Y' ];
      }
    })
    console.log(this.itemsY);
  }

  _keyX = 0 ;
  _keyY = 0;
  finalArr = [];
  finalResult = () =>{
      this.itemsX.forEach((val,ind)=>{
       this.finalArr.push(val);
        for (let x in val) {
          this._keyX++;
           val['X'+this._keyX] = val['X'];
           delete val[ 'X' ];
        }
      })

      this.itemsY.forEach((val,ind)=>{
        for (let x in val) {
          this._keyY++;
           val['Y'+this._keyY] = val['Y'];
           delete val[ 'Y' ];
        }
      })
     this.finalArr.push(this.itemsY);
     console.log(this.finalArr);



    }

}

  // [

  // {
  // x1:"jhj",

  // [{y1:hjh,y2:hjh}]
  //  }

  // ]
