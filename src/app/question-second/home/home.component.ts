import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public _local:SecondService
  ) { }

  ngOnInit() {
  }

}
