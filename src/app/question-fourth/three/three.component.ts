import { Component, OnInit } from '@angular/core';
import { FourthService } from '../fourth.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(
    public _local : FourthService
  ) { }

  ngOnInit() {
  }

}
