import { Component, OnInit } from '@angular/core';
import { FourthService } from '../fourth.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(
    public _local : FourthService
  ) { }

  ngOnInit() {
  }

}
