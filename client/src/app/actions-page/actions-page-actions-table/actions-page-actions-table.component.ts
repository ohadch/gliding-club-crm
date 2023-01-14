import { Component, Input, OnInit } from '@angular/core';
import { GetActions_actions } from "../../shared/graphql/types/GetActions";

@Component({
  selector: 'app-actions-page-actions-table',
  templateUrl: './actions-page-actions-table.component.html',
  styleUrls: ['./actions-page-actions-table.component.css']
})
export class ActionsPageActionsTableComponent implements OnInit {

  @Input() actions!: GetActions_actions[]
  displayedColumns: string[] = ['id', 'date'];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
