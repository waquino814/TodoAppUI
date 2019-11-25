import { Component, OnInit, Output } from '@angular/core';
import { Task } from '../models/Task';
import { ListService } from '../list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  categories: Category[];
  createForm: FormGroup;
  additionalInfo: false;

  constructor(private listService: ListService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      name : ['', Validators.required],
      category : ['', Validators.required],
      optional: this.fb.group({
        dueDate: [''],
        importance: [''],
        comment: ['']
      })
      });
    this.categories = [
      {name: 'Select Category', code: null},
      {name: 'Rep', code: 'Rep'},
      {name: 'Cat2', code: 'Cat2'}
  ];
  }

    /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.createForm.setControl(name, form);
  }
  onSubmit() {
    console.log(this.createForm.value);
    const task = new Task(this.createForm.value.name);
    task.category = this.createForm.value.category;
    this.listService.add(task);
    this.createForm.reset();
  }
}
interface Category {
  name: string;
  code: string;
}
