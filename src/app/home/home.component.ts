import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tasks: Task[];
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.tasks = this.listService.tasks;
  }

}
