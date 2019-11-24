import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})
export class OptionalComponent implements OnInit {
  @Input() createForm: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
