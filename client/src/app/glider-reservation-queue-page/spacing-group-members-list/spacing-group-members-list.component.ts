import {Component, Input, OnInit} from '@angular/core';
import {GetMembers_members} from "../../shared/graphql/types/GetMembers";

@Component({
  selector: 'app-spacing-group-members-list',
  templateUrl: './spacing-group-members-list.component.html',
  styleUrls: ['./spacing-group-members-list.component.css']
})
export class SpacingGroupMembersListComponent implements OnInit {

  @Input() name!: string
  @Input() members!: GetMembers_members[]
  constructor() { }

  ngOnInit(): void {
  }

}
