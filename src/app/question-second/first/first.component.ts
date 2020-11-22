import { Component, Input, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    public _local:SecondService
  ) { }
  @Input() index: number;
  @Input() item: any;
  ngOnInit() {
  }



}
