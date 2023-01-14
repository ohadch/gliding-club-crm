import { Component, Input, OnInit } from '@angular/core';
import { GetDuties_duties } from "../../shared/graphql/types/GetDuties";

@Component({
  selector: 'app-duties-page-duties-table',
  templateUrl: './duties-page-duties-table.component.html',
  styleUrls: ['./duties-page-duties-table.component.css']
})
export class DutiesPageDutiesTableComponent implements OnInit {

  @Input() duties!: GetDuties_duties[];
  displayedColumns: string[] = ['id', 'shift', 'role', 'member'];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
