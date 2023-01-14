import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtonsComponent implements OnInit {

  @Input() page!: number
  @Output() pageUpdated = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.pageUpdated.emit(this.page + 1)
  }

  onDecrement() {
    this.pageUpdated.emit(this.page - 1)
  }

}
