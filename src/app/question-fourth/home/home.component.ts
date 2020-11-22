import { Component, OnInit } from '@angular/core';
import { FourthService } from '../fourth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _local : FourthService
  ) { }

  ngOnInit() {
  }

}
