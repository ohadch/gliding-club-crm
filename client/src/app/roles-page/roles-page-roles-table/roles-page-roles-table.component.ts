import { Component, Input, OnInit } from '@angular/core';
import { GetRoles_roles } from "../../shared/graphql/types/GetRoles";

@Component({
  selector: 'app-roles-page-roles-table',
  templateUrl: './roles-page-roles-table.component.html',
  styleUrls: ['./roles-page-roles-table.component.css']
})
export class RolesPageRolesTableComponent implements OnInit {

  @Input() roles!: GetRoles_roles[]
  displayedColumns: string[] = ['id', 'name', 'qualifiedMembers', 'loadDistribution'];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
