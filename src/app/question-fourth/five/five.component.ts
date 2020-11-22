import { Component, OnInit } from '@angular/core';
import { FourthService } from '../fourth.service';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(
    public _local : FourthService
  ) { }

  ngOnInit() {
  }

}
