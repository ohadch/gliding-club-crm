import { Component, Input, OnInit } from '@angular/core';
import { GetMembers_members } from "../../shared/graphql/types/GetMembers";

@Component({
  selector: 'app-members-page-members-table',
  templateUrl: './members-page-members-table.component.html',
  styleUrls: ['./members-page-members-table.component.css']
})
export class MembersPageMembersTableComponent implements OnInit {

  @Input() members!: GetMembers_members[]
  displayedColumns: string[] = ['id', 'fullName', 'roles', 'duties', 'actions'];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
