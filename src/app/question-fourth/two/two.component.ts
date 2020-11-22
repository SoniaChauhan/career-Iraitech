import { Component, OnInit } from '@angular/core';
import { FourthService } from '../fourth.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(
    public _local : FourthService
  ) { }

  ngOnInit() {
  }

}
