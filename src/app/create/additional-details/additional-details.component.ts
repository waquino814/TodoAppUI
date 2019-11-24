import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {

  @Output()
  formReady = new EventEmitter<FormGroup>();
  formAdditionalDetails: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formAdditionalDetails = this.fb.group({
      importance: [''],
      status: ['']
    });
    this.formReady.emit(this.formAdditionalDetails);
  }



}
