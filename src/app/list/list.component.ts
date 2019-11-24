import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  data: Task[];
  rowGroupMetadata: any;
  constructor() {
  }

  ngOnInit() {
    this.updateRowGroupMetaData();
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.data) {
        for (let i = 0; i < this.data.length; i++) {
            const rowData = this.data[i];
            const category = rowData.category;
            if (i === 0) {
                this.rowGroupMetadata[category] = { index: 0, size: 1 };
            } else {
              const previousRowData = this.data[i - 1];
              const previousRowGroup = previousRowData.category;
                if (category === previousRowGroup) {
                    this.rowGroupMetadata[category].size++;
                } else {
                    this.rowGroupMetadata[category] = { index: i, size: 1 };
                }
            }
        }
    }
}
}


