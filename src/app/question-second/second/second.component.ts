import { Component, Input, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    public _local:SecondService
  ) { }

  ngOnInit() {
  }

  @Input() index: number;
  @Input() item: any;

}
