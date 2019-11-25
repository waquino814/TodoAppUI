import { Component, OnInit, Input, Directive, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  data: Task[];
  constructor() {
  }
  ngOnInit() {
  } 
}


