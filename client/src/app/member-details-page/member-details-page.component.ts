import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetMember_member } from "../shared/graphql/types/GetMember";
import { MembersService } from "../shared/services/members.service";

@Component({
  selector: 'app-member-details-page',
  templateUrl: './member-details-page.component.html',
  styleUrls: ['./member-details-page.component.css']
})
export class MemberDetailsPageComponent implements OnInit {

  member!: GetMember_member

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService
  ) {

    const memberId = this.route.snapshot.paramMap.get("id");
    if (memberId) {
      this.membersService.getOne(parseInt(memberId)).subscribe(({ data }) => {
        this.member = data.member;
      })
    }

  }

  ngOnInit(): void {
  }

}
