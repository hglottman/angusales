import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filterString: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeFilter() {

    this.filterChanged.emit(this.filterString);
  }

}
