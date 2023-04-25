import { Component, OnInit } from '@angular/core';
import {MembersService} from "../shared/services/members.service";
import {GetMember_member} from "../shared/graphql/types/GetMember";

@Component({
  selector: 'app-glider-reservation-queue-page',
  templateUrl: './glider-reservation-queue-page.component.html',
  styleUrls: ['./glider-reservation-queue-page.component.css']
})
export class GliderReservationQueuePageComponent implements OnInit {
  members: GetMember_member[] = []

  constructor(
    private membersService: MembersService,
  ) { }

  ngOnInit(): void {
    this.membersService.getAll().then(members => {
      this.members = members
    })
  }

  public get spacingGroups(): { name: string, members: GetMember_member[] }[] {
    const groupsMap: { [key: string]: GetMember_member[] } = {}

    this.members.forEach(member => {
      if (!member.gliderReservationQueueSpacingGroup) {
        return
      }

      if (!Object.keys(groupsMap).includes(member.gliderReservationQueueSpacingGroup.name)) {
        groupsMap[member.gliderReservationQueueSpacingGroup.name] = []
      }

      groupsMap[member.gliderReservationQueueSpacingGroup.name].push(member)
    })

    return Object.keys(groupsMap).map(name => {
      return {
        name,
        members: groupsMap[name]
      }
    }).sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
  }
}
