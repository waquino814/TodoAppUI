import { Injectable } from '@angular/core';
import { Task} from './models/Task';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private _tasks: Task[];
  taskAdded = new EventEmitter;

  constructor() {
    this._tasks = Array<Task>();
    this._tasks .push(new Task('five'));
    this._tasks .push(new Task( 'cero'));
    this._tasks .push(new Task('one'));
    this._tasks .push(new Task( 'cero'));
    this._tasks .push(new Task('one'));
    const t1 = new Task('five');
    t1.category = 'Cat2';
    this._tasks .push(t1 );
    const t2 = new Task('tre');
    t2.category = 'Cat2';
    this._tasks .push(t2 );
    const t3 = new Task('task');
    t3.category = 'Cat2';
    this._tasks .push(t3 );
  }

  get tasks(): Task[] {
    return this._tasks;
  }
  add(task: Task) {
    this._tasks.push(task);
    this.taskAdded.emit(task.name);
  }
}
